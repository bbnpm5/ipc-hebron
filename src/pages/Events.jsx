import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, Users, RefreshCw, AlertCircle, Sparkles, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getEvents } from '../services/googleCalendar'

const Events = () => {
  const { t } = useTranslation()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fallback sample events if Google Calendar is not configured
  const fallbackEvents = [
    {
      id: 1,
      title: "Youth Conference",
      date: "2024-02-15",
      time: "6:00 PM",
      location: "Church Main Hall",
      description: "A special gathering for young people with worship, teaching, and fellowship.",
      category: "Youth"
    },
    {
      id: 2,
      title: "Bible Study Workshop",
      date: "2024-02-20",
      time: "7:00 PM",
      location: "Church Main Hall",
      description: "Learn effective methods for studying and understanding God's Word.",
      category: "Education"
    },
    {
      id: 3,
      title: "Community Outreach",
      date: "2024-02-25",
      time: "9:00 AM",
      location: "Local Community Center",
      description: "Join us as we serve our community and share the love of Christ.",
      category: "Outreach"
    },
    {
      id: 4,
      title: "Worship Night",
      date: "2024-03-01",
      time: "7:00 PM",
      location: "Church Main Hall",
      description: "An evening of extended worship, prayer, and seeking God's presence.",
      category: "Worship"
    },
    {
      id: 5,
      title: "Easter Celebration",
      date: "2024-03-31",
      time: "10:00 AM",
      location: "Church Main Hall",
      description: "Celebrate the resurrection of our Lord and Savior Jesus Christ.",
      category: "Holiday"
    },
    {
      id: 6,
      title: "Prayer & Fasting Retreat",
      date: "2024-04-05",
      time: "All Day",
      location: "Church Main Hall",
      description: "A day dedicated to prayer, fasting, and seeking God's face together.",
      category: "Prayer"
    }
  ]

  // Fetch events from Google Calendar
  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true)
      setError(null)
      try {
        const googleEvents = await getEvents()
        
        if (googleEvents.length > 0) {
          // Use events from Google Calendar
          setEvents(googleEvents)
        } else {
          // Fallback to sample events if no Google Calendar events found
          setEvents(fallbackEvents)
        }
      } catch (err) {
        console.error('Error loading events:', err)
        setError(err.message)
        // Use fallback events on error
        setEvents(fallbackEvents)
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
    
    // Refresh events every 5 minutes
    const interval = setInterval(loadEvents, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
      full: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Youth': {
        bg: 'bg-gradient-to-br from-blue-500 to-blue-700',
        text: 'text-white',
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20'
      },
      'Education': {
        bg: 'bg-gradient-to-br from-green-500 to-green-700',
        text: 'text-white',
        border: 'border-green-500/30',
        glow: 'shadow-green-500/20'
      },
      'Outreach': {
        bg: 'bg-gradient-to-br from-purple-500 to-purple-700',
        text: 'text-white',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20'
      },
      'Worship': {
        bg: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
        text: 'text-white',
        border: 'border-yellow-500/30',
        glow: 'shadow-yellow-500/20'
      },
      'Holiday': {
        bg: 'bg-gradient-to-br from-red-500 to-red-700',
        text: 'text-white',
        border: 'border-red-500/30',
        glow: 'shadow-red-500/20'
      },
      'Prayer': {
        bg: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
        text: 'text-white',
        border: 'border-indigo-500/30',
        glow: 'shadow-indigo-500/20'
      }
    }
    return colors[category] || {
      bg: 'bg-gradient-to-br from-gray-500 to-gray-700',
      text: 'text-white',
      border: 'border-gray-500/30',
      glow: 'shadow-gray-500/20'
    }
  }

  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&h=600&fit=crop&q=80)',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl mb-4">
            {t('pageTitles.events')}
          </h1>
          {/* Event Count Badge */}
          {!loading && events.length > 0 && (
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">{events.length} Upcoming Events</span>
            </div>
          )}
        </div>
      </section>

      {/* Events List Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          {/* Loading State */}
          {loading ? (
            <div className="max-w-6xl mx-auto text-center py-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-large group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-10 h-10 text-white animate-spin" />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-medium">{t('common.loading')}</p>
            </div>
          ) : error && events.length === 0 ? (
            <div className="max-w-6xl mx-auto mb-8 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-soft border border-yellow-200 p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-medium">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">
                      {error}. Showing sample events. Please configure Google Calendar API to see your events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : events.length === 0 ? (
            <div className="max-w-6xl mx-auto text-center py-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-semibold">No upcoming events found.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for new events!</p>
            </div>
          ) : null}

          {/* Modern Events Grid */}
          <div className="max-w-6xl mx-auto grid gap-8">
            {events.map((event, index) => {
              const dateInfo = formatDate(event.date)
              const categoryColors = getCategoryColor(event.category)
              return (
                <div
                  key={event.id}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Main Event Card */}
                  <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 ${categoryColors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                    <div className={`absolute -top-32 -right-32 w-96 h-96 ${categoryColors.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                    <div className="flex flex-col md:flex-row relative z-10">
                      {/* Modern Date Badge */}
                      <div className="md:w-48 p-8 flex flex-col items-center justify-center relative">
                        {/* Date Circle */}
                        <div className="relative mb-4">
                          <div className={`absolute inset-0 ${categoryColors.bg} rounded-full blur-lg opacity-30`}></div>
                          <div className={`relative w-28 h-28 ${categoryColors.bg} rounded-full flex flex-col items-center justify-center shadow-large group-hover:scale-110 transition-all duration-500`}>
                            <div className="text-4xl font-bold text-white drop-shadow-lg">{dateInfo.day}</div>
                            <div className="text-sm font-semibold text-white/90 uppercase">{dateInfo.month}</div>
                          </div>
                        </div>

                        {/* Year and Weekday */}
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-600">{dateInfo.weekday}</p>
                          <p className="text-xs text-gray-500">{dateInfo.year}</p>
                        </div>

                        {/* Category Badge */}
                        <div className="mt-4">
                          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${categoryColors.bg} text-white shadow-medium`}>
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                      {/* Event Details */}
                      <div className="flex-1 p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                          {event.title}
                        </h2>

                        {/* Divider */}
                        <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                          <div className={`absolute inset-0 ${categoryColors.bg} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-base">
                          {event.description}
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Date Info */}
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 ${categoryColors.bg} rounded-xl flex items-center justify-center shadow-medium`}>
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Date</p>
                              <p className="text-sm font-medium text-gray-900">{dateInfo.full}</p>
                            </div>
                          </div>

                          {/* Time Info */}
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 ${categoryColors.bg} rounded-xl flex items-center justify-center shadow-medium`}>
                              <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Time</p>
                              <p className="text-sm font-medium text-gray-900">{event.time}</p>
                            </div>
                          </div>

                          {/* Location Info */}
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 ${categoryColors.bg} rounded-xl flex items-center justify-center shadow-medium`}>
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                              <p className="text-sm font-medium text-gray-900">{event.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`h-1 ${categoryColors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Configuration Note */}
          {!import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY && (
            <div className="max-w-6xl mx-auto mt-12 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-soft border border-primary-200 p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl blur-md opacity-40"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Google Calendar Integration</h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      To display events from your Google Calendar automatically,
                      please configure the API credentials. See <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono border border-gray-200">GOOGLE_CALENDAR_SETUP.md</code> for instructions.
                    </p>
                    <p className="text-xs text-gray-600">
                      Currently showing sample events. Once configured, your Google Calendar events will appear here automatically.
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

export default Events
