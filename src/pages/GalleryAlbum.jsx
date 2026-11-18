import { useCallback, useRef } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar, Camera, Expand, Sparkles } from 'lucide-react'
import LazyImage from '../components/gallery/LazyImage'
import AlbumCard from '../components/gallery/AlbumCard'
import PhotoViewer from '../components/gallery/PhotoViewer'
import { albums, getAlbum, getCover } from '../data/gallery'

const GalleryAlbum = () => {
  const { albumId } = useParams()
  const album = getAlbum(albumId)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const openedHere = useRef(false)

  // The open photo lives in the address (?photo=…), so a photo link can be
  // shared, and the phone's Back button closes the viewer.
  const photoId = searchParams.get('photo')
  const viewerIndex = album && photoId ? album.photos.findIndex((p) => p.id === photoId) : -1

  const openPhoto = (index) => {
    openedHere.current = true
    setSearchParams({ photo: album.photos[index].id })
  }
  const changePhoto = useCallback(
    (index) => setSearchParams({ photo: album.photos[index].id }, { replace: true }),
    [album, setSearchParams]
  )
  const closeViewer = useCallback(() => {
    if (openedHere.current) {
      openedHere.current = false
      navigate(-1)
    } else {
      setSearchParams({}, { replace: true })
    }
  }, [navigate, setSearchParams])

  if (!album) {
    return (
      <div className="container-custom px-4 py-24 text-center">
        <Helmet>
          <title>Album not found | IPC Hebron Neria</title>
        </Helmet>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Album not found</h1>
        <p className="text-gray-600 mb-8">This album may have been moved or renamed.</p>
        <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </div>
    )
  }

  const cover = getCover(album)
  const otherAlbums = albums.filter((a) => a.id !== album.id).slice(0, 3)
  const count = album.photos.length

  // Fewer columns for small albums, so there are no empty columns
  const columnClasses =
    count <= 1
      ? 'columns-1 max-w-3xl'
      : count === 2
        ? 'columns-1 sm:columns-2 max-w-5xl'
        : count === 3
          ? 'columns-2 md:columns-3 max-w-6xl'
          : 'columns-2 md:columns-3 xl:columns-4 max-w-7xl'

  return (
    <div>
      <Helmet>
        <title>{`${album.title} | Gallery | IPC Hebron Neria`}</title>
        {album.description && <meta name="description" content={album.description} />}
      </Helmet>

      {/* Album banner, using the cover photo */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <LazyImage fill eager src={cover.thumb} placeholder={cover.placeholder} alt="" imgClassName="scale-110 blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-primary-900/50"></div>

        <div className="relative container-custom px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All albums
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {album.label && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                  {album.label}
                </span>
              )}
              {album.date && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/85">
                  <Calendar className="w-3.5 h-3.5" />
                  {album.date}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/85">
                <Camera className="w-3.5 h-3.5" />
                {count} photo{count === 1 ? '' : 's'}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl">{album.title}</h1>
            {album.description && (
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">{album.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Photo grid (masonry) */}
      <section className="py-8 md:py-12 px-3 sm:px-6 lg:px-8 bg-white">
        <div className={`mx-auto gap-3 md:gap-4 ${columnClasses}`}>
          {album.photos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => openPhoto(index)}
              className="group relative block w-full mb-3 md:mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-shadow duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400 animate-fade-in"
              style={{ animationDelay: `${Math.min(index, 12) * 0.05}s` }}
              aria-label={`Open photo ${index + 1}${photo.caption ? `: ${photo.caption}` : ''}`}
            >
              <LazyImage
                src={photo.thumb}
                placeholder={photo.placeholder}
                alt={photo.alt}
                width={photo.thumbWidth}
                height={photo.thumbHeight}
                eager={index < 4}
                imgClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <span className="text-left text-sm font-semibold text-white drop-shadow line-clamp-2">{photo.caption}</span>
                <Expand className="w-4 h-4 text-white flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* More albums */}
      {otherAlbums.length > 0 && (
        <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">More albums</h2>
              <Link to="/gallery" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {otherAlbums.map((a, i) => (
                <AlbumCard key={a.id} album={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {viewerIndex !== -1 && (
        <PhotoViewer album={album} index={viewerIndex} onIndexChange={changePhoto} onClose={closeViewer} />
      )}
    </div>
  )
}

export default GalleryAlbum
