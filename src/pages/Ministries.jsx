import { Link } from 'react-router-dom'
import { Users, BookOpen, Heart, ArrowRight, Sparkles, Target, Flame } from 'lucide-react'

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      title: 'Youth Ministry (PYPA)',
      icon: Sparkles,
      description: 'The Pentecostal Young People\'s Association (PYPA) is the dynamic youth wing of IPC Hebron, empowering young believers (ages 15-35) to live passionately for God. Through vibrant worship, discipleship programs, and mission-driven initiatives, we help youth discover their purpose and impact their generation for Christ.',
      features: [
        'Weekly youth meetings and Bible studies',
        'Worship and prayer gatherings',
        'Mission trips and outreach programs',
        'Leadership development training',
        'Fellowship and community building'
      ],
      color: 'primary'
    },
    {
      id: 2,
      title: 'Sunday School',
      icon: BookOpen,
      description: 'The Sunday School Ministry of IPC Hebron is committed to nurturing the faith of children and young believers by grounding them in biblical teachings from an early age. Our goal is to train up a child in the way they should go (Proverbs 22:6) and help them grow in faith, wisdom, and Christian values.',
      features: [
        'Age-appropriate Bible lessons',
        'Interactive learning activities',
        'Scripture memorization',
        'Character building programs',
        'Special events and competitions'
      ],
      color: 'accent'
    },
    {
      id: 3,
      title: 'Women\'s Fellowship (Sodari Samajam)',
      icon: Heart,
      description: 'The Sodari Samajam is the women\'s ministry of IPC Hebron, uniting sisters across our church to grow spiritually, serve passionately, and impact families for Christ. Through weekly prayer circles, Bible studies, and outreach initiatives, we support and encourage one another in our walk with God.',
      features: [
        'Weekly prayer meetings',
        'Bible study groups',
        'Fellowship gatherings',
        'Community service projects',
        'Encouragement and support network'
      ],
      color: 'primary'
    },
    {
      id: 4,
      title: 'Prayer Ministry',
      icon: Flame,
      description: 'Our Prayer Ministry is dedicated to interceding for the church, community, and the world. We believe in the power of prayer and gather regularly to seek God\'s face, intercede for needs, and experience breakthrough through corporate prayer.',
      features: [
        'Weekly prayer meetings',
        'Intercessory prayer teams',
        '24/7 prayer chain',
        'Prayer request handling',
        'Fasting and prayer events'
      ],
      color: 'accent'
    },
    {
      id: 5,
      title: 'Evangelism & Outreach',
      icon: Target,
      description: 'Our Evangelism and Outreach Ministry is committed to sharing the Gospel with our community and beyond. Through various programs and initiatives, we reach out to those who don\'t know Christ and demonstrate God\'s love through practical service.',
      features: [
        'Community outreach programs',
        'Street evangelism',
        'Hospital visits',
        'Food distribution',
        'Disaster relief efforts'
      ],
      color: 'primary'
    },
    {
      id: 6,
      title: 'Worship Ministry',
      icon: Sparkles,
      description: 'The Worship Ministry leads our congregation in Spirit-filled worship, creating an atmosphere where God\'s presence is welcomed and experienced. Our team of musicians and singers is dedicated to excellence in worship and leading others into God\'s presence.',
      features: [
        'Weekly worship team practice',
        'Music and vocal training',
        'Special worship events',
        'Youth worship teams',
        'Technical support team'
      ],
      color: 'accent'
    }
  ]

  return (
    <div>
      {/* Ministries Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const Icon = ministry.icon
              const bgGradient = ministry.color === 'primary' 
                ? 'from-primary-600 to-primary-700' 
                : 'from-accent-600 to-accent-700'
              const textColor = ministry.color === 'primary' 
                ? 'text-primary-600' 
                : 'text-accent-600'
              
              return (
                <div key={ministry.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${bgGradient} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold">{ministry.title}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">{ministry.description}</p>
                    <ul className="space-y-2 mb-6">
                      {ministry.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className={`${textColor} mt-1`}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className={`inline-flex items-center font-semibold ${textColor} hover:opacity-80 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              There's a place for everyone in our church family. Whether you're interested 
              in youth ministry, children's programs, worship, or outreach, we'd love to 
              help you find your place to serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/events" className="bg-primary-500 text-white hover:bg-primary-400 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center border-2 border-white">
                View Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Serve</h2>
            <p className="text-xl text-gray-600">
              Our ministries are built on biblical principles and a heart for service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Purpose</h3>
              <p className="text-gray-600">
                Every ministry has a clear purpose aligned with God's Word and our mission
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                We serve with passion, dedication, and a heart to see lives transformed
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">People</h3>
              <p className="text-gray-600">
                Our ministries are about people - loving, serving, and building relationships
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ministries
