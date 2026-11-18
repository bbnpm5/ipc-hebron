import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Camera } from 'lucide-react'
import AlbumCard from '../components/gallery/AlbumCard'
import { albums, totalPhotos } from '../data/gallery'

const Gallery = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Helmet>
        <title>Gallery | IPC Hebron Neria</title>
        <meta name="description" content="Photo gallery of IPC Hebron Neria – Bible conventions, baptism services, church events, and community moments." />
      </Helmet>

      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            {t('pageTitles.gallery')}
          </h1>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/85 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Camera className="w-4 h-4" />
            {albums.length} album{albums.length === 1 ? '' : 's'} · {totalPhotos} photo{totalPhotos === 1 ? '' : 's'}
          </p>
        </div>
      </section>

      {/* Albums */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
            Moments of faith, worship and fellowship from our church family. Choose an album to see all its photos.
          </p>

          {albums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-7xl mx-auto">
              {albums.map((album, index) => (
                <AlbumCard key={album.id} album={album} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16">Photos are coming soon.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery
