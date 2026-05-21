import { useState, useEffect } from 'react'
import { Play, Calendar, Clock, Youtube, RefreshCw, AlertCircle, ExternalLink, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { getLatestVideos } from '../services/youtubeApi'
import { extractYouTubeVideoId, getYouTubeThumbnailUrl } from '../utils/youtube'

const Sermons = () => {
  const { t } = useTranslation()
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [playingVideoId, setPlayingVideoId] = useState(null)

  // Fallback sermons if YouTube API is not configured
  const fallbackSermons = [
    {
      id: 'DVjxKOejX4s',
      title: "Walking in Faith",
      date: "2024-01-14T00:00:00Z",
      description: "A message about trusting God in every season of life and walking by faith, not by sight.",
      youtubeUrl: "https://www.youtube.com/watch?v=DVjxKOejX4s",
      thumbnail: getYouTubeThumbnailUrl('DVjxKOejX4s', 'high')
    },
    {
      id: 'U1BletN1NBs',
      title: "The Power of Prayer",
      date: "2024-01-07T00:00:00Z",
      description: "Understanding the importance and power of prayer in the life of a believer.",
      youtubeUrl: "https://www.youtube.com/watch?v=U1BletN1NBs",
      thumbnail: getYouTubeThumbnailUrl('U1BletN1NBs', 'high')
    },
    {
      id: 'Qg_PWkH0uOg',
      title: "Living in the Spirit",
      date: "2023-12-31T00:00:00Z",
      description: "How to be led by the Holy Spirit and walk in the fullness of God's power.",
      youtubeUrl: "https://www.youtube.com/watch?v=Qg_PWkH0uOg",
      thumbnail: getYouTubeThumbnailUrl('Qg_PWkH0uOg', 'high')
    },
    {
      id: 'WxxgIodwbHc',
      title: "God's Unfailing Love",
      date: "2023-12-24T00:00:00Z",
      description: "Celebrating the birth of Christ and the depth of God's love for humanity.",
      youtubeUrl: "https://www.youtube.com/watch?v=WxxgIodwbHc",
      thumbnail: getYouTubeThumbnailUrl('WxxgIodwbHc', 'high')
    }
  ]

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true)
      setError(null)
      try {
        const latestVideos = await getLatestVideos(6)
        if (latestVideos.length > 0) {
          setVideos(latestVideos)
        } else {
          setVideos(fallbackSermons)
        }
      } catch (err) {
        console.error('Error loading YouTube videos:', err)
        setError(err.message)
        setVideos(fallbackSermons)
      } finally {
        setLoading(false)
      }
    }

    loadVideos()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTimeSince = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const channelUrl = 'https://www.youtube.com/@IPCHebronNeria'

  return (
    <div>
      <Helmet>
        <title>Sermons | IPC Hebron Neria</title>
        <meta name="description" content="Watch and listen to sermons from IPC Hebron Neria – messages from the Word of God to inspire and strengthen your faith." />
      </Helmet>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image - Sermons Theme */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=600&fit=crop&q=80)',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl mb-4">
            {t('pageTitles.sermons')}
          </h1>
          <p className="text-primary-100 text-base md:text-lg drop-shadow-lg mb-6">{t('home.listenMessages')}</p>
          {/* Subscribe Button */}
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-large hover:shadow-glow-lg hover:scale-105"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe to Our Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-gradient">
              Latest Messages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Watch our latest sermons and messages from IPC Hebron Neria
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto shadow-large">
                  <RefreshCw className="w-10 h-10 text-white animate-spin" />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-medium">Loading latest videos...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-soft border border-yellow-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-medium">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">{error}</p>
                    <p className="text-xs text-gray-500 mt-1">Showing sample sermons below.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Videos Grid */}
          {!loading && (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videos.map((video, index) => {
                const videoId = video.id || extractYouTubeVideoId(video.youtubeUrl)
                const thumbnailUrl = video.thumbnail || getYouTubeThumbnailUrl(videoId, 'high')

                return (
                  <div
                    key={video.id}
                    className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Video Player / Thumbnail */}
                    <div className="relative overflow-hidden">
                      <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        {playingVideoId === videoId ? (
                          <>
                            {/* Embedded YouTube Player */}
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            {/* Close Button */}
                            <button
                              onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null) }}
                              className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors"
                            >
                              <X className="w-4 h-4 text-white" />
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Thumbnail with Play Button */}
                            <img
                              src={thumbnailUrl}
                              alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                              onClick={() => setPlayingVideoId(videoId)}
                              onError={(e) => {
                                e.target.src = getYouTubeThumbnailUrl(videoId, 'medium')
                              }}
                            />
                            <div
                              className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                              onClick={() => setPlayingVideoId(videoId)}
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-large group-hover:scale-110 transition-transform duration-300">
                                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5">
                              <Youtube className="w-4 h-4 text-red-500" />
                              <span className="text-white text-xs font-medium">YouTube</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 md:p-6">
                      <h3
                        className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 cursor-pointer"
                        onClick={() => setPlayingVideoId(videoId)}
                      >
                        {video.title}
                      </h3>

                      {video.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {video.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(video.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{getTimeSince(video.date)}</span>
                          </div>
                        </div>
                        {/* Watch on YouTube Link */}
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-red-600 hover:text-red-700 text-xs font-semibold transition-colors"
                          title="Watch on YouTube"
                        >
                          <Youtube className="w-4 h-4" />
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* View More on YouTube */}
          {!loading && videos.length > 0 && (
            <div className="text-center mt-12 animate-fade-in">
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-large hover:shadow-glow-lg hover:scale-105"
              >
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>View All Videos on YouTube</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}

          {/* Configuration Note */}
          {!import.meta.env.VITE_YOUTUBE_CHANNEL_ID && (
            <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-soft border border-primary-200 p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl blur-md opacity-40"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-medium">
                        <Youtube className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube Channel Integration</h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      To display your latest YouTube videos automatically, add these to your <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono border border-gray-200">.env</code> file:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 text-xs font-mono">
                      <p className="text-gray-600">VITE_YOUTUBE_CHANNEL_ID=your_channel_id_here</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      No API key needed - uses the public YouTube RSS feed. Currently showing sample sermons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Sermons
