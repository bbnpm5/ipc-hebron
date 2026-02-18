/**
 * YouTube Data API v3 Service
 * Fetches latest videos from a YouTube channel directly (like Google Calendar).
 * Requires: VITE_YOUTUBE_CHANNEL_ID and VITE_GOOGLE_CALENDAR_API_KEY in .env
 */

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'

/**
 * Get the uploads playlist ID from a channel ID
 * Replace "UC" prefix with "UU" to get the uploads playlist
 */
const getUploadsPlaylistId = (channelId) => {
  if (channelId.startsWith('UC')) {
    return 'UU' + channelId.slice(2)
  }
  return channelId
}

/**
 * Fetch latest videos from a YouTube channel
 * @param {string} channelId - YouTube channel ID (starts with UC)
 * @param {string} apiKey - Google API key
 * @param {number} maxResults - Number of videos to fetch (default: 6)
 * @returns {Promise<Array>} Array of video objects
 */
export const fetchLatestVideos = async (channelId, apiKey, maxResults = 6) => {
  const uploadsPlaylistId = getUploadsPlaylistId(channelId)

  const url = new URL(`${YOUTUBE_API_BASE}/playlistItems`)
  url.searchParams.append('key', apiKey)
  url.searchParams.append('playlistId', uploadsPlaylistId)
  url.searchParams.append('part', 'snippet')
  url.searchParams.append('maxResults', maxResults.toString())

  const response = await fetch(url.toString())

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    const errorMessage = errorData?.error?.message || response.statusText
    throw new Error(`YouTube API error (${response.status}): ${errorMessage}`)
  }

  const data = await response.json()

  if (!data.items || data.items.length === 0) {
    return []
  }

  return data.items.map((item) => {
    const snippet = item.snippet
    const videoId = snippet.resourceId?.videoId
    return {
      id: videoId || item.id,
      title: snippet.title,
      description: snippet.description || '',
      date: snippet.publishedAt,
      thumbnail: snippet.thumbnails?.standard?.url ||
                 snippet.thumbnails?.high?.url ||
                 snippet.thumbnails?.medium?.url ||
                 snippet.thumbnails?.default?.url,
      youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`
    }
  })
}

/**
 * Get latest videos using env config
 * @param {number} maxResults - Number of videos (default: 6)
 * @returns {Promise<Array>} Array of video objects
 */
export const getLatestVideos = async (maxResults = 6) => {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    console.warn('YouTube API credentials not configured.')
    return []
  }

  return fetchLatestVideos(channelId, apiKey, maxResults)
}
