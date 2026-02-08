import { useState } from 'react'
import { Play, Calendar, User, Youtube } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import YouTubeEmbed from '../components/YouTubeEmbed'

const Sermons = () => {
  const { t } = useTranslation()
  
  // Sermon data with YouTube integration
  // To add a new sermon, simply add a new object with youtubeUrl or youtubeVideoId
  // Supported formats:
  // - Full URL: "https://www.youtube.com/watch?v=VIDEO_ID"
  // - Short URL: "https://youtu.be/VIDEO_ID"
  // - Direct ID: "VIDEO_ID"
  const [sermons] = useState([
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor Suresh",
      date: "2024-01-14",
      description: "A message about trusting God in every season of life and walking by faith, not by sight.",
      duration: "45 min",
      youtubeUrl: "https://www.youtube.com/watch?v=DVjxKOejX4s",
      youtubeType: "video"
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Suresh",
      date: "2024-01-07",
      description: "Understanding the importance and power of prayer in the life of a believer.",
      duration: "42 min",
      youtubeUrl: "https://www.youtube.com/watch?v=U1BletN1NBs",
      youtubeType: "video"
    },
    {
      id: 3,
      title: "Living in the Spirit",
      speaker: "Pastor Suresh",
      date: "2023-12-31",
      description: "How to be led by the Holy Spirit and walk in the fullness of God's power.",
      duration: "50 min",
      youtubeUrl: "https://www.youtube.com/watch?v=Qg_PWkH0uOg",
      youtubeType: "video"
    },
    {
      id: 4,
      title: "God's Unfailing Love",
      speaker: "Pastor Suresh",
      date: "2023-12-24",
      description: "Celebrating the birth of Christ and the depth of God's love for humanity.",
      duration: "38 min",
      youtubeUrl: "https://www.youtube.com/watch?v=WxxgIodwbHc",
      youtubeType: "video"
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
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
            {sermons.map((sermon, index) => (
              <div 
                key={sermon.id} 
                className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-400/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:via-primary-400/5 group-hover:to-accent-500/5 transition-all duration-500"></div>

                <div className="p-6 md:p-8 relative z-10">
                  {/* Sermon Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                          {sermon.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-medium">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold">{sermon.speaker}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-medium">
                              <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <span>{formatDate(sermon.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center shadow-medium">
                              <Play className="w-4 h-4 text-white" />
                            </div>
                            <span>{sermon.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {sermon.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Embed */}
                  {sermon.youtubeUrl && (
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-medium">
                          <Youtube className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Watch Sermon</h3>
                      </div>
                      <YouTubeEmbed 
                        youtubeUrl={sermon.youtubeUrl}
                        type={sermon.youtubeType || 'video'}
                        title={sermon.title}
                      />
                    </div>
                  )}
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sermons
