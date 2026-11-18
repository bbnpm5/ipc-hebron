/**
 * Gallery builder
 *
 * Reads every album folder in /gallery-photos, then for each photo:
 *   - fixes rotation from the phone's EXIF "orientation" tag
 *   - makes a small thumbnail (grid and cards) and a large version (viewer),
 *     both as compressed WebP, into /public/gallery-generated
 *   - makes a tiny blurred preview that shows while the photo loads
 * and writes everything the site needs into src/generated/gallery.json.
 *
 * Runs automatically before `npm run dev` and `npm run build`, and again
 * while the dev server is running whenever a photo or album.json changes.
 * Run it by hand with `npm run gallery`.
 *
 * Photos that were already processed and haven't changed are skipped, so
 * re-runs are fast.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = path.join(ROOT, 'gallery-photos')
const OUTPUT_DIR = path.join(ROOT, 'public', 'gallery-generated')
const OUTPUT_URL = '/gallery-generated'
const MANIFEST = path.join(ROOT, 'src', 'generated', 'gallery.json')

const SIZES = {
  thumb: { width: 720, quality: 72 },
  full: { width: 2048, quality: 80 }
}
const PHOTO_EXT = /\.(jpe?g|png|webp|tiff?|avif)$/i
const UNSUPPORTED_EXT = /\.(heic|heif)$/i

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'photo'

const titleFromFolder = (folder) =>
  folder.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })

async function exists(file) {
  try {
    return await fs.stat(file)
  } catch {
    return null
  }
}

async function readAlbumJson(albumDir, folder, warn) {
  const file = path.join(albumDir, 'album.json')
  if (!(await exists(file))) return {}
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'))
  } catch (err) {
    warn(`${folder}/album.json is not valid JSON (${err.message}). Using defaults for this album.`)
    return {}
  }
}

/** Resize one photo to one size, unless an up-to-date copy already exists. */
async function renderSize(sourceFile, sourceStat, outFile, { width, quality }) {
  const outStat = await exists(outFile)
  if (!outStat || outStat.mtimeMs < sourceStat.mtimeMs) {
    await sharp(sourceFile)
      .rotate() // apply EXIF orientation, so portrait phone photos stay upright
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outFile)
  }
  const { width: w, height: h } = await sharp(outFile).metadata()
  return { width: w, height: h }
}

async function makePlaceholder(sourceFile) {
  const buffer = await sharp(sourceFile)
    .rotate()
    .resize({ width: 24 })
    .webp({ quality: 40 })
    .toBuffer()
  return `data:image/webp;base64,${buffer.toString('base64')}`
}

export async function buildGallery({ quiet = false } = {}) {
  const started = Date.now()
  const warnings = []
  const warn = (msg) => warnings.push(msg)
  const log = (...args) => !quiet && console.log(...args)

  if (!(await exists(SOURCE_DIR))) {
    await fs.mkdir(SOURCE_DIR, { recursive: true })
  }
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  await fs.mkdir(path.dirname(MANIFEST), { recursive: true })

  const folders = (await fs.readdir(SOURCE_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !d.name.startsWith('_'))
    .map((d) => d.name)
    .sort(naturalSort)

  const keepOutputs = new Set()
  const albums = []
  let processed = 0

  for (const folder of folders) {
    const albumDir = path.join(SOURCE_DIR, folder)
    const albumId = slugify(folder)
    const meta = await readAlbumJson(albumDir, folder, warn)
    const captions = meta.captions || {}

    const files = (await fs.readdir(albumDir)).sort(naturalSort)
    files.filter((f) => UNSUPPORTED_EXT.test(f)).forEach((f) =>
      warn(`${folder}/${f}: HEIC photos aren't supported. Please convert it to JPG first.`)
    )
    const photoFiles = files.filter((f) => PHOTO_EXT.test(f))
    if (photoFiles.length === 0) {
      warn(`${folder}: no photos yet, album skipped.`)
      continue
    }

    const outAlbumDir = path.join(OUTPUT_DIR, albumId)
    await fs.mkdir(outAlbumDir, { recursive: true })
    keepOutputs.add(outAlbumDir)

    const usedIds = new Set()
    const photos = []
    for (const file of photoFiles) {
      const sourceFile = path.join(albumDir, file)
      const sourceStat = await fs.stat(sourceFile)
      let id = slugify(file)
      while (usedIds.has(id)) id += '-2'
      usedIds.add(id)

      try {
        const thumbFile = path.join(outAlbumDir, `${id}-thumb.webp`)
        const fullFile = path.join(outAlbumDir, `${id}.webp`)
        const thumb = await renderSize(sourceFile, sourceStat, thumbFile, SIZES.thumb)
        const full = await renderSize(sourceFile, sourceStat, fullFile, SIZES.full)
        keepOutputs.add(thumbFile)
        keepOutputs.add(fullFile)
        processed++

        const caption = captions[file] || ''
        photos.push({
          id,
          file,
          caption,
          alt: caption || `${meta.title || titleFromFolder(folder)} photo ${photos.length + 1}`,
          width: full.width,
          height: full.height,
          thumb: `${OUTPUT_URL}/${albumId}/${id}-thumb.webp`,
          thumbWidth: thumb.width,
          thumbHeight: thumb.height,
          src: `${OUTPUT_URL}/${albumId}/${id}.webp`,
          placeholder: await makePlaceholder(sourceFile)
        })
      } catch (err) {
        warn(`${folder}/${file}: couldn't be processed (${err.message}). Skipped.`)
      }
    }
    if (photos.length === 0) continue

    for (const key of Object.keys(captions)) {
      if (!photoFiles.includes(key)) warn(`${folder}/album.json has a caption for "${key}", but there's no photo with that name.`)
    }

    let coverIndex = 0
    if (meta.cover) {
      const found = photos.findIndex((p) => p.file === meta.cover)
      if (found === -1) warn(`${folder}/album.json: cover "${meta.cover}" not found. Using the first photo.`)
      else coverIndex = found
    }

    albums.push({
      id: albumId,
      title: meta.title || titleFromFolder(folder),
      subtitle: meta.subtitle || '',
      label: meta.label || '',
      date: meta.date || '',
      description: meta.description || '',
      order: Number.isFinite(meta.order) ? meta.order : 1000,
      coverIndex,
      photos
    })
  }

  albums.sort((a, b) => a.order - b.order || naturalSort(a.title, b.title))

  // Remove generated files for photos or albums that were deleted or renamed
  for (const entry of await fs.readdir(OUTPUT_DIR, { withFileTypes: true })) {
    const entryPath = path.join(OUTPUT_DIR, entry.name)
    if (!keepOutputs.has(entryPath)) {
      await fs.rm(entryPath, { recursive: true, force: true })
      continue
    }
    if (entry.isDirectory()) {
      for (const f of await fs.readdir(entryPath)) {
        const p = path.join(entryPath, f)
        if (!keepOutputs.has(p)) await fs.rm(p, { force: true })
      }
    }
  }

  const json = JSON.stringify({ albums }, null, 2) + '\n'
  const previous = (await exists(MANIFEST)) ? await fs.readFile(MANIFEST, 'utf8') : null
  if (json !== previous) await fs.writeFile(MANIFEST, json)

  warnings.forEach((w) => console.warn(`[gallery] ⚠ ${w}`))
  log(`[gallery] ${albums.length} albums, ${processed} photos ready (${Date.now() - started} ms)`)
  return { albums, warnings }
}

// Run directly: `node scripts/build-gallery.mjs`
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildGallery().catch((err) => {
    console.error('[gallery] failed:', err)
    process.exit(1)
  })
}
