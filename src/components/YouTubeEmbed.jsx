import { useState } from 'react'
import { Play, ExternalLink, Youtube } from 'lucide-react'
import { extractYouTubeVideoId, getYouTubeWatchUrl, getYouTubeThumbnailUrl } from '../utils/youtube'

const YouTubeEmbed = ({ videoId, youtubeUrl, type = 'video', title = '', useThumbnail = false }) => {
  // Extract video ID from either direct ID or URL
  const id = videoId || extractYouTubeVideoId(youtubeUrl)
  
  if (!id) {
    return (
      <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
        <p>Invalid YouTube video URL</p>
      </div>
    )
  }

  const watchUrl = getYouTubeWatchUrl(id)
  const thumbnailUrl = getYouTubeThumbnailUrl(id, 'maxres')
  const [thumbnailError, setThumbnailError] = useState(false)

  // Use thumbnail preview (better for videos with embedding disabled)
  // This provides a cleaner experience and works for all videos
  return (
    <div className="w-full">
      {/* Thumbnail Preview with Play Button */}
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full bg-black rounded-xl overflow-hidden shadow-glow-lg group block hover:shadow-glow-xl transition-all duration-300"
      >
        {/* Responsive Wrapper - 16:9 Aspect Ratio */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {/* Thumbnail Image */}
          <img
            src={thumbnailError ? getYouTubeThumbnailUrl(id, 'high') : thumbnailUrl}
            alt={title || 'YouTube video thumbnail'}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => {
              if (!thumbnailError) {
                setThumbnailError(true)
              }
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-300"></div>
          
          {/* Play Button - Large and Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              {/* Play Button */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-glow-xl group-hover:scale-110 group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          
          {/* YouTube Logo Badge - Top Right */}
          <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-3 py-2 rounded-lg flex items-center gap-2 shadow-medium group-hover:bg-black/95 transition-colors">
            <Youtube className="w-5 h-5 text-red-600" />
            <span className="text-white text-sm font-semibold">YouTube</span>
          </div>
          
          {/* Video Title Overlay - Bottom Left */}
          {title && (
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-md">
              <div className="bg-black/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-medium">
                <p className="text-white font-semibold text-sm md:text-base line-clamp-2">{title}</p>
              </div>
            </div>
          )}
        </div>
      </a>

      {/* Watch on YouTube Button */}
      <div className="mt-4 flex items-center justify-center">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-medium hover:shadow-glow-lg hover:scale-105 active:scale-100"
        >
          <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Watch on YouTube</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default YouTubeEmbed
