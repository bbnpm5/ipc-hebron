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
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-20 md:py-28 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='events-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='3' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='3' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23events-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-900/85"></div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-4 animate-slide-up">
            {t('pageTitles.events')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 drop-shadow-lg max-w-3xl mx-auto animate-fade-in">
            {t('events.subtitle')}
          </p>
          {/* Event Count Badge */}
          {!loading && events.length > 0 && (
            <div className="mt-6 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-scale-in">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">{events.length} Upcoming Events</span>
            </div>
          )}
        </div>
      </section>

      {/* Events List Section with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          {/* Loading State */}
          {loading ? (
            <div className="max-w-5xl mx-auto text-center py-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow-lg">
                  <RefreshCw className="w-10 h-10 text-white animate-spin" />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-medium">{t('common.loading')}</p>
            </div>
          ) : error && events.length === 0 ? (
            <div className="max-w-5xl mx-auto mb-8 animate-fade-in">
              <div className="card-gradient border-l-4 border-yellow-500 p-6">
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
            <div className="max-w-5xl mx-auto text-center py-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-semibold">No upcoming events found.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for new events!</p>
            </div>
          ) : null}

          {/* Enhanced Events Grid */}
          <div className="max-w-5xl mx-auto space-y-6">
            {events.map((event, index) => {
              const dateInfo = formatDate(event.date)
              const categoryColors = getCategoryColor(event.category)
              return (
                <div 
                  key={event.id} 
                  className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Background Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 ${categoryColors.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>
                  
                  <div className="flex flex-col md:flex-row relative z-10">
                    {/* Enhanced Date Box */}
                    <div className={`${categoryColors.bg} text-white p-6 md:p-8 text-center min-w-[140px] md:min-w-[160px] flex flex-col justify-center relative overflow-hidden`}>
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl font-bold mb-1 drop-shadow-lg">{dateInfo.day}</div>
                        <div className="text-xl md:text-2xl font-semibold mb-1">{dateInfo.month}</div>
                        <div className="text-sm opacity-90">{dateInfo.year}</div>
                        <div className="text-xs mt-2 opacity-75 uppercase tracking-wide">{dateInfo.weekday}</div>
                      </div>
                    </div>
                    
                    {/* Enhanced Event Details */}
                    <div className="flex-1 p-6 md:p-8">
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border-2 ${categoryColors.bg} ${categoryColors.text} ${categoryColors.border} shadow-medium`}>
                          {event.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                        {event.description}
                      </p>
                      
                      {/* Enhanced Info Icons */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-primary-200 transition-colors">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-medium">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Date</p>
                            <p className="text-sm font-semibold text-gray-900 truncate">{dateInfo.full}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-primary-200 transition-colors">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-medium">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Time</p>
                            <p className="text-sm font-semibold text-gray-900">{event.time}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-primary-200 transition-colors">
                          <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-medium">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Location</p>
                            <p className="text-sm font-semibold text-gray-900 truncate">{event.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Arrow Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-glow">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Configuration Note */}
          {!import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY && (
            <div className="max-w-5xl mx-auto mt-8 animate-fade-in">
              <div className="card-gradient border-l-4 border-primary-500 p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Google Calendar Integration</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      To display events from your Google Calendar automatically, 
                      please configure the API credentials. See <code className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">GOOGLE_CALENDAR_SETUP.md</code> for instructions.
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
