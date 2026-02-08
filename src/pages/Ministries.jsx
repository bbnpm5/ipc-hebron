import { Link } from 'react-router-dom'
import { Users, BookOpen, Heart, ArrowRight, Sparkles, Target, Flame } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Ministries = () => {
  const { t } = useTranslation()
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
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image - Ministries Theme */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=600&fit=crop&q=80)',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">{t('pageTitles.ministries')}</h1>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon
              const bgGradient = ministry.color === 'primary'
                ? 'from-primary-600 to-primary-700'
                : 'from-accent-600 to-accent-700'
              const textColor = ministry.color === 'primary'
                ? 'text-primary-600'
                : 'text-accent-600'
              const hoverBorderColor = ministry.color === 'primary'
                ? 'group-hover:border-primary-200'
                : 'group-hover:border-accent-200'

              return (
                <div
                  key={ministry.id}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Main Card Container */}
                  <div className={`relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 ${hoverBorderColor} h-full flex flex-col`}>
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                    <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${bgGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                    {/* Card Content */}
                    <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                      {/* Icon and Title */}
                      <div className="flex flex-col items-center text-center mb-6">
                        {/* Icon Circle */}
                        <div className="relative mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                          <div className={`relative w-20 h-20 bg-gradient-to-br ${bgGradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                            <div className="absolute inset-2 bg-white/20 rounded-full backdrop-blur-sm"></div>
                            <Icon className="relative w-10 h-10 text-white drop-shadow-lg" />
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className={`text-xl md:text-2xl font-bold text-gray-900 group-hover:${textColor} transition-colors duration-300`}>
                          {ministry.title}
                        </h2>

                        {/* Divider */}
                        <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mt-3">
                          <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-5 flex-grow">
                        {ministry.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {ministry.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${bgGradient} rounded-lg flex items-center justify-center shadow-sm`}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <Link
                        to="/contact"
                        className={`inline-flex items-center justify-center font-semibold ${textColor} hover:opacity-80 transition-all duration-300 group/link`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`h-1 bg-gradient-to-r ${bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why We Serve</h2>
            <p className="text-xl text-gray-600">
              Our ministries are built on biblical principles and a heart for service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every ministry has a clear purpose aligned with God's Word and our mission
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl"></div>
            </div>
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-accent-200">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent-600 transition-colors">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve with passion, dedication, and a heart to see lives transformed
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl"></div>
            </div>
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">People</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our ministries are about people - loving, serving, and building relationships
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ministries
