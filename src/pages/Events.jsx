import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const Events = () => {
  // Sample events - in production, this would come from an API or CMS
  const upcomingEvents = [
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
      'Youth': 'bg-blue-100 text-blue-800',
      'Education': 'bg-green-100 text-green-800',
      'Outreach': 'bg-purple-100 text-purple-800',
      'Worship': 'bg-yellow-100 text-yellow-800',
      'Holiday': 'bg-red-100 text-red-800',
      'Prayer': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div>
      {/* Events List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event) => {
              const dateInfo = formatDate(event.date)
              return (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Date Box */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 text-center min-w-[120px] flex flex-col justify-center">
                      <div className="text-4xl font-bold">{dateInfo.day}</div>
                      <div className="text-lg font-semibold">{dateInfo.month}</div>
                      <div className="text-sm opacity-90">{dateInfo.year}</div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                              {event.category}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
                          <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{dateInfo.full}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Note for future implementation */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This is a sample events calendar. In production, events 
                can be managed through a calendar system or CMS. You can integrate with Google 
                Calendar, add event registration, or sync with other calendar applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
