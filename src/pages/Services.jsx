import { Calendar, Clock, Users, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
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
      time: '07:00 PM - 09:00 PM',
      title: 'Cottage Meeting',
      description: 'Small group gatherings in homes for Bible study, prayer, and fellowship. These intimate meetings provide an opportunity for deeper connection and spiritual growth.',
      icon: Users,
      color: 'accent'
    },
    {
      day: 'Friday',
      time: '11:00 AM - 01:00 PM',
      title: 'Fasting Prayer',
      description: 'A dedicated time of fasting and prayer where we seek God\'s face, intercede for our community, and experience the power of corporate prayer.',
      icon: Heart,
      color: 'primary'
    }
  ]

  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=600&fit=crop&q=80)',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            Service Times
          </h1>
        </div>
      </section>

      {/* Enhanced Service Schedule with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const gradientClass = service.color === 'accent' 
                ? 'from-accent-500 via-accent-600 to-accent-700'
                : 'from-primary-500 via-primary-600 to-primary-700'
              const iconBgClass = service.color === 'accent'
                ? 'from-accent-400 to-accent-600'
                : 'from-primary-400 to-primary-600'
              
              return (
                <div 
                  key={index} 
                  className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Decorative Background Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradientClass} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>
                  
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${gradientClass} text-white p-6 md:p-8 relative overflow-hidden`}>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                      {/* Icon Badge */}
                      <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${iconBgClass} rounded-2xl flex items-center justify-center shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow flex-shrink-0`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                      </div>
                      
                      {/* Title Section */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h2 className="text-2xl md:text-3xl font-bold">{service.day}</h2>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide">
                            {service.color === 'accent' ? 'Fellowship' : 'Worship'}
                          </span>
                        </div>
                        <p className="text-lg md:text-xl opacity-95 font-medium">{service.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <div className="p-6 md:p-8 relative z-10">
                    {/* Time Badge */}
                    <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-primary-200 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Service Time</p>
                        <p className="text-lg font-bold text-gray-900">{service.time}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                      {service.description}
                    </p>
                    
                    {/* Learn More Indicator */}
                    <div className="flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.whatToExpect')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the love of Christ through our worship, teaching, fellowship, and prayer
            </p>
          </div>

          {/* Modern Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Worship Card */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200 p-8">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {t('services.worship')}
                  </h3>

                  {/* Divider */}
                  <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {t('services.worshipText')}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Teaching Card */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-accent-200 p-8">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Calendar className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {t('services.teaching')}
                  </h3>

                  {/* Divider */}
                  <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {t('services.teachingText')}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Fellowship Card */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-gold-200 p-8">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {t('services.fellowship')}
                  </h3>

                  {/* Divider */}
                  <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {t('services.fellowshipText')}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Prayer Card */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-red-200 p-8">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Heart className="w-8 h-8 text-white" fill="currentColor" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {t('services.prayer')}
                  </h3>

                  {/* Divider */}
                  <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {t('services.prayerText')}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
