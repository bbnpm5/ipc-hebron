import { useCallback, useEffect, useRef, useState } from 'react'
import {
  X, ChevronLeft, ChevronRight, Play, Pause, Maximize, Minimize, ZoomIn, ZoomOut, Calendar
} from 'lucide-react'

const SLIDE_MS = 4000
const MAX_ZOOM = 4
const DOUBLE_TAP_MS = 300
const SWIPE_PX = 50

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const NO_ZOOM = { scale: 1, x: 0, y: 0 }

/**
 * Full-screen photo viewer.
 * - Swipe, arrow keys or buttons to move between photos
 * - Pinch, double-tap/double-click or mouse wheel to zoom; drag to pan
 * - Slideshow (space bar), full screen (F), thumbnail strip, Esc to close
 */
const PhotoViewer = ({ album, index, onIndexChange, onClose }) => {
  const photos = album.photos
  const photo = photos[index]
  const count = photos.length

  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const stripRef = useRef(null)
  const [zoom, setZoom] = useState(NO_ZOOM)
  const zoomRef = useRef(zoom) // latest zoom, for gesture handlers
  zoomRef.current = zoom
  const [playing, setPlaying] = useState(false)
  // Track which photo has loaded (not a true/false flag), so a cached photo
  // that loads instantly can never be hidden by a later reset.
  const [loadedSrc, setLoadedSrc] = useState(null)
  const loaded = loadedSrc === photo.src
  const mainImgRef = useCallback(
    (el) => {
      if (el && el.complete && el.naturalWidth > 0) setLoadedSrc(el.getAttribute('src'))
    },
    []
  )
  const [dragX, setDragX] = useState(0) // swipe feedback
  const [isFullscreen, setIsFullscreen] = useState(false)
  const canFullscreen = typeof document !== 'undefined' && document.fullscreenEnabled

  const go = useCallback(
    (step) => onIndexChange((index + step + count) % count),
    [index, count, onIndexChange]
  )

  // Reset per-photo state
  useEffect(() => {
    setZoom(NO_ZOOM)
    setDragX(0)
  }, [index])

  // Preload neighbours so moving through the album is instant
  useEffect(() => {
    if (count < 2) return
    ;[index + 1, index - 1].forEach((i) => {
      const img = new Image()
      img.src = photos[(i + count) % count].src
    })
  }, [index, count, photos])

  // Keep the active thumbnail in view
  useEffect(() => {
    const el = stripRef.current?.querySelector(`[data-index="${index}"]`)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  // Slideshow
  useEffect(() => {
    if (!playing || count < 2) return
    const timer = setTimeout(() => go(1), SLIDE_MS)
    return () => clearTimeout(timer)
  }, [playing, index, count, go])

  // Stop the slideshow while zoomed in
  useEffect(() => {
    if (zoom.scale > 1) setPlaying(false)
  }, [zoom.scale])

  // Lock page scroll behind the viewer
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  // Full screen
  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === rootRef.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
    }
  }, [])
  const toggleFullscreen = useCallback(() => {
    if (!canFullscreen) return
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    else rootRef.current?.requestFullscreen().catch(() => {})
  }, [canFullscreen])

  // Zoom helpers. Keeps the point under the finger/cursor in place.
  const limitPan = useCallback((z) => {
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return z
    const maxX = ((z.scale - 1) * rect.width) / 2
    const maxY = ((z.scale - 1) * rect.height) / 2
    return { scale: z.scale, x: clamp(z.x, -maxX, maxX), y: clamp(z.y, -maxY, maxY) }
  }, [])

  const zoomTo = useCallback(
    (scale, clientX, clientY) => {
      const rect = stageRef.current?.getBoundingClientRect()
      setZoom((z) => {
        const s = clamp(scale, 1, MAX_ZOOM)
        if (s === 1 || !rect) return NO_ZOOM
        const px = (clientX ?? rect.left + rect.width / 2) - (rect.left + rect.width / 2)
        const py = (clientY ?? rect.top + rect.height / 2) - (rect.top + rect.height / 2)
        // point under cursor: p = z.x + u*z.scale  ->  keep p fixed at new scale
        const ux = (px - z.x) / z.scale
        const uy = (py - z.y) / z.scale
        return limitPan({ scale: s, x: px - ux * s, y: py - uy * s })
      })
    },
    [limitPan]
  )

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') onClose()
      else if (e.key === ' ') {
        e.preventDefault()
        setPlaying((p) => !p)
      } else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      else if (e.key === '+' || e.key === '=') setZoom((z) => limitPan({ ...z, scale: clamp(z.scale * 1.5, 1, MAX_ZOOM) }))
      else if (e.key === '-') setZoom((z) => (z.scale / 1.5 <= 1 ? NO_ZOOM : limitPan({ ...z, scale: z.scale / 1.5 })))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose, toggleFullscreen, limitPan])

  // Pointer gestures: swipe, pan, pinch, double-tap
  const pointers = useRef(new Map())
  const gesture = useRef(null)
  const lastTap = useRef({ time: 0, x: 0, y: 0 })

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const pts = [...pointers.current.values()]
    if (pts.length === 1) {
      gesture.current = { type: 'drag', startX: e.clientX, startY: e.clientY, zoom: zoomRef.current, moved: false }
    } else if (pts.length === 2) {
      const [a, b] = pts
      gesture.current = {
        type: 'pinch',
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        scale: zoomRef.current.scale,
        cx: (a.x + b.x) / 2,
        cy: (a.y + b.y) / 2
      }
      setDragX(0)
    }
  }

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const g = gesture.current
    if (!g) return
    if (g.type === 'pinch' && pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      zoomTo((g.scale * dist) / g.dist, g.cx, g.cy)
    } else if (g.type === 'drag') {
      const dx = e.clientX - g.startX
      const dy = e.clientY - g.startY
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) g.moved = true
      if (g.zoom.scale > 1) {
        setZoom(limitPan({ scale: g.zoom.scale, x: g.zoom.x + dx, y: g.zoom.y + dy }))
      } else if (count > 1 && Math.abs(dx) > Math.abs(dy)) {
        setDragX(dx)
      }
    }
  }

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId)
    const g = gesture.current
    if (pointers.current.size > 0) {
      // Pinch ended with one finger still down: continue as a pan
      const [p] = [...pointers.current.values()]
      gesture.current = { type: 'drag', startX: p.x, startY: p.y, zoom: zoomRef.current, moved: true }
      return
    }
    gesture.current = null
    if (!g || g.type !== 'drag') return

    const dx = e.clientX - g.startX
    const dy = e.clientY - g.startY
    setDragX(0)

    if (g.zoom.scale === 1 && Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1)
      return
    }
    if (!g.moved) {
      const now = Date.now()
      const near = Math.hypot(e.clientX - lastTap.current.x, e.clientY - lastTap.current.y) < 30
      if (now - lastTap.current.time < DOUBLE_TAP_MS && near) {
        lastTap.current.time = 0
        if (zoomRef.current.scale > 1) setZoom(NO_ZOOM)
        else zoomTo(2.5, e.clientX, e.clientY)
      } else {
        lastTap.current = { time: now, x: e.clientX, y: e.clientY }
      }
    }
  }

  const onWheel = (e) => {
    const factor = Math.exp(-e.deltaY * 0.0015)
    zoomTo(zoomRef.current.scale * factor, e.clientX, e.clientY)
  }

  const zoomed = zoom.scale > 1
  const iconBtn =
    'w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col select-none animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${album.title} photo viewer`}
    >
      {/* Slideshow progress */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-white/10 z-20">
        {playing && (
          <div
            key={`${index}-progress`}
            className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
            style={{ animation: `viewer-progress ${SLIDE_MS}ms linear forwards` }}
          ></div>
        )}
      </div>
      <style>{'@keyframes viewer-progress { from { width: 0 } to { width: 100% } }'}</style>

      {/* Top bar */}
      <div
        className="relative z-20 flex items-center justify-between gap-3 px-3 sm:px-5 pb-2"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)' }}
      >
        <div className="min-w-0 flex-1 text-white">
          <p className="text-sm sm:text-base font-semibold truncate">{album.title}</p>
          <p className="text-xs text-white/60">
            {index + 1} / {count}
          </p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {count > 1 && (
            <button
              type="button"
              className={iconBtn}
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              title={playing ? 'Pause slideshow (space)' : 'Play slideshow (space)'}
            >
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          )}
          <button
            type="button"
            className={`${iconBtn} hidden sm:flex`}
            onClick={() => (zoomed ? setZoom(NO_ZOOM) : zoomTo(2.5))}
            aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
            title={zoomed ? 'Zoom out' : 'Zoom in (or double-click the photo)'}
          >
            {zoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          {canFullscreen && (
            <button
              type="button"
              className={iconBtn}
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
              title={isFullscreen ? 'Exit full screen (F)' : 'Full screen (F)'}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          )}
          <button type="button" className={iconBtn} onClick={onClose} aria-label="Close" title="Close (Esc)">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Photo stage */}
      <div
        ref={stageRef}
        className={`relative flex-1 min-h-0 overflow-hidden touch-none ${zoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
      >
        {/* Blurred preview while the large photo loads */}
        <img
          src={photo.placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-contain p-2 sm:p-4 blur-2xl transition-opacity duration-500 ${
            loaded ? 'opacity-0' : 'opacity-60'
          }`}
        />
        <div
          className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
          style={{
            transform: `translate3d(${zoom.x + dragX}px, ${zoom.y}px, 0) scale(${zoom.scale})`,
            transition: gesture.current ? 'none' : 'transform 250ms ease-out'
          }}
        >
          <img
            key={photo.src}
            ref={mainImgRef}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            draggable={false}
            onLoad={(e) => setLoadedSrc(e.currentTarget.getAttribute('src'))}
            className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Prev / next (desktop) */}
        {count > 1 && !zoomed && (
          <>
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => go(-1)}
              className={`${iconBtn} absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden sm:flex w-12 h-12 sm:w-12 sm:h-12`}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => go(1)}
              className={`${iconBtn} absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 hidden sm:flex w-12 h-12 sm:w-12 sm:h-12`}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="relative z-10 px-4 pt-3 text-center text-white min-h-[3.25rem]">
        {photo.caption && <p className="text-sm sm:text-base md:text-lg font-semibold break-words">{photo.caption}</p>}
        {album.date && (
          <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-white/60">
            <Calendar className="w-3.5 h-3.5" />
            {album.date}
          </p>
        )}
        <p className="sm:hidden mt-1 text-[11px] text-white/40">Swipe to browse · double-tap to zoom</p>
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div
          ref={stripRef}
          className="relative z-10 flex gap-2 overflow-x-auto px-4 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
        >
          <div className="flex gap-2 mx-auto">
            {photos.map((p, i) => (
              <button
                key={p.id}
                type="button"
                data-index={i}
                onClick={() => onIndexChange(i)}
                className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === index ? 'ring-2 ring-white opacity-100 scale-105' : 'opacity-45 hover:opacity-80'
                }`}
                aria-label={`Show photo ${i + 1}${p.caption ? `: ${p.caption}` : ''}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <img
                  src={p.thumb}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ backgroundImage: `url(${p.placeholder})`, backgroundSize: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoViewer
