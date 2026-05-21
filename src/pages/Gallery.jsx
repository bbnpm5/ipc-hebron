import { useEffect, useMemo, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const albums = [
  {
    id: 'bible-convention',
    title: 'Bible Convention',
    subtitle: 'Word, worship, and fellowship',
    dateLabel: 'Annual Convention',
    cover: '/Convention%202015.jpeg',
    description:
      'A time of deeper teaching, united prayer, and spiritual renewal as the church gathers around the Word of God.',
    photos: [
      {
        id: 'bc-1',
        src: '/Convention%202012.png',
        alt: 'Bible convention 2012',
        caption: 'Bible Convention 2012'
      },
      {
        id: 'bc-2',
        src: '/Convention%202015.jpeg',
        alt: 'Operations Team - Bible Convention',
        caption: 'Operations Team - Bible Convention 2015'
      },
      {
        id: 'bc-3',
        src: '/Convention-%202015.jpeg',
        alt: 'Bible convention service',
        caption: 'Facilitating Pr. Paul Verkey'
      }
    ]
  },
  {
    id: 'baptism-service',
    title: 'Baptism Service',
    subtitle: 'New life in Christ',
    dateLabel: 'Special Service',
    cover: '/Baptism1.jpeg',
    description: 'Celebrating public confession of faith through water baptism with the church family.',
    photos: [
      {
        id: 'bp-1',
        src: '/Baptism1.jpeg',
        alt: 'Baptism service moment 1',
        caption: 'Baptism service'
      },
      {
        id: 'bp-2',
        src: '/Baptism2.jpeg',
        alt: 'Baptism service moment 2',
        caption: 'Celebrating faith and obedience'
      },
      {
        id: 'bp-3',
        src: '/Baptism3.png',
        alt: 'Baptism service moment 3',
        caption: 'Church rejoicing together'
      }
    ]
  },
  {
    id: 'church-dedication',
    title: 'Church Dedication',
    subtitle: 'Milestone in church history',
    dateLabel: 'Dedication Ceremony',
    cover: '/gallery/ChurchBuildingDedication1.jpg',
    description:
      'A memorable day dedicating our church building to God, with thanksgiving and prayers for future ministry.',
    photos: [
      {
        id: 'cd-1',
        src: '/gallery/ChurchBuildingDedication1.jpg',
        alt: 'Church dedication service',
        caption: 'Dedication service'
      },
      {
        id: 'cd-2',
        src: '/gallery/ChurchBuildingDedication2.jpg',
        alt: 'Church dedication ceremony',
        caption: "Celebrating God's faithfulness"
      }
    ]
  }
]

const Gallery = () => {
  const { t } = useTranslation()
  const [selectedAlbumId, setSelectedAlbumId] = useState(albums[0].id)
  const [selectedImage, setSelectedImage] = useState(null)
  const touchStartXRef = useRef(null)

  const selectedAlbum = useMemo(
    () => albums.find((album) => album.id === selectedAlbumId) || albums[0],
    [selectedAlbumId]
  )

  const handleAlbumSelect = (album) => {
    setSelectedAlbumId(album.id)

    // Open selected album immediately by showing its first photo in lightbox.
    if (album.photos.length > 0) {
      setSelectedImage(album.photos[0])
    }
  }

  const navigateImage = (direction) => {
    if (!selectedImage || selectedAlbum.photos.length === 0) return

    const currentIndex = selectedAlbum.photos.findIndex((photo) => photo.id === selectedImage.id)
    if (currentIndex === -1) return

    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % selectedAlbum.photos.length
        : (currentIndex - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length

    setSelectedImage(selectedAlbum.photos[nextIndex])
  }

  useEffect(() => {
    if (!selectedImage) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'ArrowRight') navigateImage('next')
      if (event.key === 'ArrowLeft') navigateImage('prev')
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedImage, selectedAlbum])

  useEffect(() => {
    if (!selectedImage) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedImage])

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) return
    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchStartXRef.current - touchEndX
    touchStartXRef.current = null

    // Swipe threshold to avoid accidental navigation.
    if (Math.abs(deltaX) < 45) return
    if (deltaX > 0) navigateImage('next')
    else navigateImage('prev')
  }

  return (
    <div>
      <Helmet>
        <title>Gallery | IPC Hebron Neria</title>
        <meta name="description" content="Photo gallery of IPC Hebron Neria – Bible conventions, baptism services, church events, and community moments." />
      </Helmet>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            {t('pageTitles.gallery')}
          </h1>
        </div>
      </section>

      {/* Album Selector Section */}
      <section id="albums" className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {albums.map((album, index) => {
              const isActive = selectedAlbumId === album.id

              return (
                <button
                  key={album.id}
                  onClick={() => handleAlbumSelect(album)}
                  className={`group relative text-left card-gradient overflow-hidden transition-all duration-300 animate-fade-in ${
                    isActive
                      ? 'ring-2 ring-primary-300 shadow-large scale-[1.02]'
                      : 'hover:shadow-large hover:-translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-white text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                      {album.dateLabel}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{album.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3">{album.subtitle}</p>
                    <p className="text-sm font-semibold text-primary-700">
                      {album.photos.length} photo{album.photos.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 sm:left-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl hidden sm:flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 sm:right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl hidden sm:flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl relative animate-scale-in" onClick={(event) => event.stopPropagation()}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/60 h-[52vh] sm:h-[72vh] flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain" />
            </div>
            <div className="mt-3 sm:mt-4 text-center text-white px-2">
              <p className="text-base sm:text-lg md:text-xl font-semibold break-words">{selectedImage.caption}</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                {selectedAlbum.photos.findIndex((photo) => photo.id === selectedImage.id) + 1} /{' '}
                {selectedAlbum.photos.length} in {selectedAlbum.title}
              </p>
            </div>
            <div className="sm:hidden mt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => navigateImage('prev')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 text-white border border-white/20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 text-white border border-white/20"
                aria-label="Next"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
