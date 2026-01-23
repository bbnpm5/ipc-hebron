import { Calendar, Clock, Users, Heart, MapPin } from 'lucide-react'

const Services = () => {
  const services = [
    {
      day: 'Sunday',
      time: '10:00 AM - 12:30 PM',
      title: 'Sunday Worship Service',
      description: 'Join us for our main worship service featuring praise and worship, prayer, and a message from God\'s Word. This is a time of fellowship, learning, and growing together in faith.',
      icon: Calendar,
      color: 'primary'
    },
    {
      day: 'Wednesday',
      time: 'Evening',
      title: 'Cottage Meeting',
      description: 'Small group gatherings in homes for Bible study, prayer, and fellowship. These intimate meetings provide an opportunity for deeper connection and spiritual growth.',
      icon: Users,
      color: 'accent'
    },
    {
      day: 'Friday',
      time: 'Morning',
      title: 'Fasting Prayer',
      description: 'A dedicated time of fasting and prayer where we seek God\'s face, intercede for our community, and experience the power of corporate prayer.',
      icon: Heart,
      color: 'primary'
    }
  ]

  return (
    <div>
      {/* Service Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const gradientClass = service.color === 'accent' 
                ? 'bg-gradient-to-r from-accent-600 to-accent-700'
                : 'bg-gradient-to-r from-primary-600 to-primary-700'
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`${gradientClass} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{service.day}</h2>
                        <p className="text-lg opacity-90">{service.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{service.time}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className="text-gray-700 text-lg mb-2">
                  IPC Hebron
                </p>
                <p className="text-gray-600">
                  Periyadka Road, Neria Post<br />
                  Belthangady TQ, D.K<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Worship</h3>
              <p className="text-gray-600">
                Experience vibrant, Spirit-led worship with contemporary and traditional 
                songs that honor God and invite His presence.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Teaching</h3>
              <p className="text-gray-600">
                Receive practical, Bible-based teaching that applies God's Word to 
                everyday life and helps you grow in your faith.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fellowship</h3>
              <p className="text-gray-600">
                Connect with other believers in a warm, welcoming environment where 
                everyone is valued and accepted.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Prayer</h3>
              <p className="text-gray-600">
                Join in corporate prayer and receive personal prayer ministry from 
                our prayer team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
