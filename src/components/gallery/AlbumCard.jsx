import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Camera, Sparkles } from 'lucide-react'
import LazyImage from './LazyImage'

const CYCLE_MS = 1400
const MAX_CYCLE_PHOTOS = 5

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Album cover card. On hover it gently cycles through the album's photos. */
const AlbumCard = ({ album, index = 0 }) => {
  // Cover first, then the next few photos for the hover slideshow
  const preview = useMemo(() => {
    const cover = album.photos[album.coverIndex] || album.photos[0]
    const rest = album.photos.filter((p) => p !== cover)
    return [cover, ...rest].slice(0, MAX_CYCLE_PHOTOS)
  }, [album])

  const [hovering, setHovering] = useState(false)
  const [warmed, setWarmed] = useState(false) // load extra photos only after first hover
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!hovering || preview.length < 2 || prefersReducedMotion()) return
    const timer = setInterval(() => setCurrent((i) => (i + 1) % preview.length), CYCLE_MS)
    return () => clearInterval(timer)
  }, [hovering, preview.length])

  const count = album.photos.length
  const stacked = count > 1

  return (
    <Link
      to={`/gallery/${album.id}`}
      className="group relative block animate-fade-in focus:outline-none"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={() => {
        setWarmed(true)
        setHovering(true)
      }}
      onMouseLeave={() => {
        setHovering(false)
        setCurrent(0)
      }}
      onFocus={() => setWarmed(true)}
      aria-label={`${album.title}, ${count} photo${count === 1 ? '' : 's'}`}
    >
      <div className="relative pt-3 px-2">
        {/* Stacked-photos edge, fanning out on hover */}
        {stacked && (
          <>
            <div className="absolute inset-x-6 top-0 bottom-3 rounded-2xl bg-white border border-gray-200 shadow-medium -rotate-[4deg] transition-transform duration-500 ease-out group-hover:-rotate-[7deg] group-hover:-translate-x-2 pointer-events-none"></div>
            <div className="absolute inset-x-6 top-1 bottom-2 rounded-2xl bg-primary-50 border border-primary-100 shadow-medium rotate-[3deg] transition-transform duration-500 ease-out group-hover:rotate-[6deg] group-hover:translate-x-2 pointer-events-none"></div>
          </>
        )}

        {/* Main card */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-large ring-1 ring-black/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glow-lg group-focus-visible:ring-4 group-focus-visible:ring-primary-400">
          {preview.map((photo, i) =>
            i === 0 || warmed ? (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              >
                <LazyImage
                  fill
                  src={photo.thumb}
                  placeholder={photo.placeholder}
                  alt={i === 0 ? photo.alt : ''}
                  width={photo.thumbWidth}
                  height={photo.thumbHeight}
                  eager={i === 0 && index < 3}
                  imgClassName="group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
              </div>
            ) : null
          )}

          {/* Readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none"></div>

          {/* Top chips */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
            {album.label ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                {album.label}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold flex-shrink-0">
              <Camera className="w-3.5 h-3.5" />
              {count}
            </span>
          </div>

          {/* Title block */}
          <div className="absolute inset-x-0 bottom-0 p-5 pointer-events-none">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg leading-tight">{album.title}</h3>
            {album.subtitle && <p className="text-sm text-white/85 mt-1">{album.subtitle}</p>}
            <div className="mt-3 flex items-center justify-between gap-3">
              {album.date ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75">
                  <Calendar className="w-3.5 h-3.5" />
                  {album.date}
                </span>
              ) : (
                <span />
              )}
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                View album
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            {/* Which photo is showing, while cycling */}
            {preview.length > 1 && (
              <div
                className={`mt-3 flex gap-1 transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
              >
                {preview.map((p, i) => (
                  <span
                    key={p.id}
                    className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AlbumCard
