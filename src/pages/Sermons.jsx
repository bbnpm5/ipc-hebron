import { useState } from 'react'
import { Play, Calendar, User, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Sermons = () => {
  const { t } = useTranslation()
  // Sample sermon data - in production, this would come from an API
  const [sermons] = useState([
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor Suresh",
      date: "2024-01-14",
      description: "A message about trusting God in every season of life and walking by faith, not by sight.",
      duration: "45 min",
      audioUrl: "#",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Suresh",
      date: "2024-01-07",
      description: "Understanding the importance and power of prayer in the life of a believer.",
      duration: "42 min",
      audioUrl: "#",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Living in the Spirit",
      speaker: "Pastor Suresh",
      date: "2023-12-31",
      description: "How to be led by the Holy Spirit and walk in the fullness of God's power.",
      duration: "50 min",
      audioUrl: "#",
      videoUrl: "#"
    },
    {
      id: 4,
      title: "God's Unfailing Love",
      speaker: "Pastor Suresh",
      date: "2023-12-24",
      description: "Celebrating the birth of Christ and the depth of God's love for humanity.",
      duration: "38 min",
      audioUrl: "#",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Building Strong Foundations",
      speaker: "Pastor Suresh",
      date: "2023-12-17",
      description: "The importance of building our lives on the solid foundation of God's Word.",
      duration: "44 min",
      audioUrl: "#",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "The Joy of Giving",
      speaker: "Pastor Suresh",
      date: "2023-12-10",
      description: "Discovering the blessing and joy that comes from giving generously.",
      duration: "40 min",
      audioUrl: "#",
      videoUrl: "#"
    }
  ])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">{t('pageTitles.sermons')}</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 drop-shadow-lg">{t('home.listenMessages')}</p>
        </div>
      </section>

      {/* Sermons List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{sermon.speaker}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(sermon.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="w-4 h-4" />
                          <span>{sermon.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{sermon.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {sermon.audioUrl && (
                      <a 
                        href={sermon.audioUrl} 
                        className="btn-primary inline-flex items-center text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Listen
                      </a>
                    )}
                    {sermon.videoUrl && (
                      <a 
                        href={sermon.videoUrl} 
                        className="btn-secondary inline-flex items-center text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch
                      </a>
                    )}
                    {sermon.audioUrl && (
                      <a 
                        href={sermon.audioUrl} 
                        download
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors inline-flex items-center text-sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note for future implementation */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This is a sample sermon archive. In production, sermons 
                would be uploaded and managed through a content management system. Audio and 
                video files can be hosted on platforms like YouTube, SoundCloud, or your own 
                media server.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sermons
