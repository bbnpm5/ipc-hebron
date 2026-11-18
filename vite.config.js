import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { buildGallery } from './scripts/build-gallery.mjs'

// While `npm run dev` is running, rebuild the gallery whenever a photo or
// album.json in /gallery-photos is added, changed, renamed or deleted.
const galleryWatcher = () => ({
  name: 'gallery-watcher',
  apply: 'serve',
  configureServer(server) {
    const sourceDir = path.resolve('gallery-photos')
    server.watcher.add(sourceDir)
    let timer
    const rebuild = (file) => {
      if (!path.resolve(file).startsWith(sourceDir)) return
      clearTimeout(timer)
      timer = setTimeout(async () => {
        try {
          await buildGallery()
          server.ws.send({ type: 'full-reload' })
        } catch (err) {
          server.config.logger.error(`[gallery] ${err.message}`)
        }
      }, 400)
    }
    server.watcher.on('add', rebuild)
    server.watcher.on('change', rebuild)
    server.watcher.on('unlink', rebuild)
    server.watcher.on('unlinkDir', rebuild)
  }
})

export default defineConfig({
  plugins: [react(), galleryWatcher()],
})
