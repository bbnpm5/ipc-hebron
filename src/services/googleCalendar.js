/**
 * Google Calendar API Service
 * Fetches events from a public Google Calendar
 * 
 * Setup Instructions:
 * 1. Go to Google Cloud Console (console.cloud.google.com)
 * 2. Create a new project or select existing one
 * 3. Enable Google Calendar API
 * 4. Create API Key (Credentials > Create Credentials > API Key)
 * 5. Restrict API Key to Google Calendar API only
 * 6. Get your Calendar ID:
 *    - Go to Google Calendar settings
 *    - Click on the calendar you want to use
 *    - Scroll to "Integrate calendar"
 *    - Copy the "Calendar ID" (looks like: abc123@group.calendar.google.com)
 * 7. Make sure the calendar is set to "Public" in sharing settings
 * 8. Add VITE_GOOGLE_CALENDAR_API_KEY and VITE_GOOGLE_CALENDAR_ID to .env file
 */

/**
 * Fetch events from Google Calendar (next 30 days only)
 * @param {string} calendarId - Google Calendar ID
 * @param {string} apiKey - Google Calendar API Key
 * @param {number} maxResults - Maximum number of events to fetch (default: 50)
 * @returns {Promise<Array>} Array of formatted events
 */
export const fetchGoogleCalendarEvents = async (calendarId, apiKey, maxResults = 50) => {
  try {
    if (!calendarId || !apiKey) {
      throw new Error('Calendar ID and API Key are required')
    }

    // Get current date and date 30 days from now (only show events in next 30 days)
    const now = new Date()
    const thirtyDaysLater = new Date()
    thirtyDaysLater.setDate(now.getDate() + 30)

    // Format dates for API (RFC3339 format)
    const timeMin = now.toISOString()
    const timeMax = thirtyDaysLater.toISOString()

    // Build API URL
    const url = new URL('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarId) + '/events')
    url.searchParams.append('key', apiKey)
    url.searchParams.append('timeMin', timeMin)
    url.searchParams.append('timeMax', timeMax)
    url.searchParams.append('maxResults', maxResults.toString())
    url.searchParams.append('singleEvents', 'true')
    url.searchParams.append('orderBy', 'startTime')
    url.searchParams.append('showDeleted', 'false')

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      return []
    }

    // Filter out holidays and transform events
    const events = data.items
      .filter(event => {
        // Filter out holidays - they typically have:
        // 1. No description or very short description
        // 2. Are marked as "outOfOffice" or have specific holiday indicators
        // 3. Have "transparency" set to "transparent"
        // 4. Are from holiday calendars (you can add more filters as needed)
        
        // Skip if it's marked as transparent (holidays often are)
        if (event.transparency === 'transparent') {
          return false
        }

        // Skip if it's marked as out of office
        if (event.eventType === 'outOfOffice') {
          return false
        }

        // Skip if title contains common holiday keywords (you can customize this)
        const holidayKeywords = ['holiday', 'public holiday', 'national holiday', 'bank holiday']
        const titleLower = (event.summary || '').toLowerCase()
        if (holidayKeywords.some(keyword => titleLower.includes(keyword))) {
          return false
        }

        // Skip if it's from a known holiday calendar (check organizer email)
        // You can customize this based on your calendar setup
        if (event.organizer?.email?.includes('holiday') || 
            event.organizer?.email?.includes('holidays')) {
          return false
        }

        // Only include events that have a summary (title)
        return event.summary && event.summary.trim().length > 0
      })
      .map(event => formatGoogleCalendarEvent(event))

    return events
  } catch (error) {
    console.error('Error fetching Google Calendar events:', error)
    throw error
  }
}

/**
 * Format Google Calendar event to match our event structure
 * @param {Object} googleEvent - Event from Google Calendar API
 * @returns {Object} Formatted event object
 */
const formatGoogleCalendarEvent = (googleEvent) => {
  const start = googleEvent.start?.dateTime || googleEvent.start?.date
  const end = googleEvent.end?.dateTime || googleEvent.end?.date
  const startDate = new Date(start)
  const endDate = new Date(end)

  // Extract time if it's a datetime event
  let time = 'All Day'
  if (googleEvent.start?.dateTime) {
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true }
    const startTime = startDate.toLocaleTimeString('en-US', timeOptions)
    const endTime = endDate.toLocaleTimeString('en-US', timeOptions)
    time = `${startTime} - ${endTime}`
  }

  // Extract location from event or description
  let location = 'Church Main Hall' // Default
  if (googleEvent.location) {
    location = googleEvent.location
  } else if (googleEvent.description) {
    // Try to extract location from description
    const locationMatch = googleEvent.description.match(/location[:\s]+([^\n]+)/i)
    if (locationMatch) {
      location = locationMatch[1].trim()
    }
  }

  // Extract category from description or use default
  let category = 'Events'
  if (googleEvent.description) {
    const categoryMatch = googleEvent.description.match(/category[:\s]+([^\n]+)/i)
    if (categoryMatch) {
      category = categoryMatch[1].trim()
    } else {
      // Try to infer from title
      const title = (googleEvent.summary || '').toLowerCase()
      if (title.includes('youth') || title.includes('pypa')) category = 'Youth'
      else if (title.includes('prayer') || title.includes('fasting')) category = 'Prayer'
      else if (title.includes('worship')) category = 'Worship'
      else if (title.includes('outreach') || title.includes('community')) category = 'Outreach'
      else if (title.includes('bible') || title.includes('study')) category = 'Education'
    }
  }

  return {
    id: googleEvent.id,
    title: googleEvent.summary || 'Untitled Event',
    date: startDate.toISOString().split('T')[0], // YYYY-MM-DD format
    time: time,
    location: location,
    description: googleEvent.description || googleEvent.summary || '',
    category: category,
    googleEventLink: googleEvent.htmlLink,
    startDateTime: startDate.toISOString(),
    endDateTime: endDate.toISOString()
  }
}

/**
 * Get events with fallback to sample data
 * @returns {Promise<Array>} Array of events
 */
export const getEvents = async () => {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID

  // If API credentials are not configured, return empty array
  // The component will handle showing a message or fallback data
  if (!apiKey || !calendarId) {
    console.warn('Google Calendar API credentials not configured. Using fallback data.')
    return []
  }

  try {
    const events = await fetchGoogleCalendarEvents(calendarId, apiKey)
    return events
  } catch (error) {
    console.error('Failed to fetch Google Calendar events:', error)
    // Return empty array on error - component can show error message
    return []
  }
}
