import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DailyVerse from '../components/DailyVerse'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700 ease-out bg-fixed md:bg-fixed"
          style={{
            backgroundImage: 'url(/Home_BackgroundScreen.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-primary-900/20 animate-pulse"></div>
        </div>

        {/* Hero Content - Centered Text with Animation */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 animate-slide-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-[0.2em] uppercase mb-4">
              {t('home.heroWelcome')}
            </h2>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 leading-[1.1] animate-slide-up px-2 relative group">
            <span className="block relative">
              {/* Main Gradient Text */}
              <span
                className="relative inline-block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent animate-gradient-x"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                {t('home.heroTitle')}
              </span>

              {/* Shimmer Overlay Effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent animate-shimmer pointer-events-none"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                {t('home.heroTitle')}
              </span>

              {/* Glow Effect */}
              <span
                className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                {t('home.heroTitle')}
              </span>
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-scale-in px-4">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-large hover:shadow-glow-lg hover:scale-110 active:scale-95 overflow-hidden min-h-[44px]"
            >
              <span className="relative z-10">{t('home.heroCTA')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-transparent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold uppercase tracking-wider rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
            >
              {t('home.learnMore')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Daily Verse Section */}
      <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="card-gradient max-w-4xl mx-auto">
            <DailyVerse />
          </div>
        </div>
      </section>

      {/* Service Times Quick View */}
      <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="section-title">{t('home.serviceSchedule')}</h2>
            <p className="section-subtitle">Join us for worship, fellowship, and spiritual growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sunday Service */}
            <div className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">{t('home.sundayService')}</h3>
                <p className="text-lg text-primary-600 font-semibold mb-2">09:30 AM - 12:00 PM</p>
                <p className="text-gray-600">Main worship service</p>
              </div>
            </div>

            {/* Wednesday Cottage Meeting */}
            <div className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-accent-600 transition-colors">{t('home.wednesday')}</h3>
                <p className="text-lg text-accent-600 font-semibold mb-2">7:00 PM - 9:00 PM</p>
                <p className="text-gray-600">{t('home.cottageMeeting')}</p>
              </div>
            </div>

            {/* Friday Fasting Prayer */}
            <div className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gold-600 transition-colors">{t('home.friday')}</h3>
                <p className="text-lg text-gold-600 font-semibold mb-2">11:00 AM - 1:00 PM</p>
                <p className="text-gray-600">{t('home.fastingPrayer')}</p>
              </div>
            </div>

            {/* Monthly Fasting & Prayer */}
            <div className="card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">Month End</h3>
                <p className="text-lg text-primary-600 font-semibold mb-2">Last Fri, Sat & Sunday</p>
                <p className="text-gray-600">Fasting & Prayer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="section-title">{t('home.getInvolved')}</h2>
            <p className="section-subtitle">Explore ways to connect, serve, and grow with our community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Link to="/sermons" className="group card-gradient text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-medium group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">{t('home.sermons')}</h3>
              <p className="text-gray-600">{t('home.listenMessages')}</p>
            </Link>
            <Link to="/events" className="group card-gradient text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-medium group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-accent-600 transition-colors">{t('home.events')}</h3>
              <p className="text-gray-600">{t('home.upcomingEvents')}</p>
            </Link>
            <Link to="/prayer-request" className="group card-gradient text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-medium group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gold-600 transition-colors">{t('home.prayer')}</h3>
              <p className="text-gray-600">{t('home.submitPrayer')}</p>
            </Link>
            <Link to="/gallery" className="group card-gradient text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-medium group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">{t('home.gallery')}</h3>
              <p className="text-gray-600">{t('home.viewGallery')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  )
}

export default Home
