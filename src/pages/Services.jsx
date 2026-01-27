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
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='services-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23services-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/8 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-accent-500/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <div className="inline-block mb-3 md:mb-4 animate-fade-in">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <Calendar className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-2 md:mb-3 animate-slide-up">
            {t('pageTitles.services')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 drop-shadow-lg max-w-2xl mx-auto animate-fade-in px-2">
            {t('home.serviceTimes')}
          </p>
          {/* Service Count Badge */}
          <div className="mt-4 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-scale-in">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">{services.length} Weekly Services</span>
          </div>
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

      {/* Enhanced What to Expect Section with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient">
              {t('services.whatToExpect')}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Experience the love of Christ through our worship, teaching, fellowship, and prayer
            </p>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Worship Card */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {t('services.worship')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {t('services.worshipText')}
              </p>
            </div>
            
            {/* Teaching Card */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mb-6 shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Calendar className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                {t('services.teaching')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {t('services.teachingText')}
              </p>
            </div>
            
            {/* Fellowship Card */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl flex items-center justify-center mb-6 shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                {t('services.fellowship')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {t('services.fellowshipText')}
              </p>
            </div>
            
            {/* Prayer Card */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Heart className="w-8 h-8 text-white" fill="currentColor" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {t('services.prayer')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {t('services.prayerText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
