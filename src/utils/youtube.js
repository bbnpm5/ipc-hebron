/**
 * Extracts YouTube video ID from various URL formats
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - Direct video ID string
 * 
 * @param {string} url - YouTube URL or video ID
 * @returns {string|null} - Extracted video ID or null if invalid
 */
export const extractYouTubeVideoId = (url) => {
  if (!url) return null

  // If it's already just a video ID (11 characters, alphanumeric, dashes, underscores)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url
  }

  // Try to extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

/**
 * Generates YouTube thumbnail URL
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality: 'default', 'medium', 'high', 'standard', 'maxres'
 * @returns {string} - YouTube thumbnail URL
 */
export const getYouTubeThumbnailUrl = (videoId, quality = 'maxres') => {
  if (!videoId) return null
  
  // Fallback to high quality if maxres is not available
  const qualityMap = {
    'default': 'default',
    'medium': 'mqdefault',
    'high': 'hqdefault',
    'standard': 'sddefault',
    'maxres': 'maxresdefault'
  }
  
  const qualityKey = qualityMap[quality] || 'maxresdefault'
  return `https://img.youtube.com/vi/${videoId}/${qualityKey}.jpg`
}
