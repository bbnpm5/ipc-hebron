import { useTranslation } from 'react-i18next'

const OurStory = () => {
  const { t } = useTranslation()
  
  const pastPastors = [
    {
      id: 1,
      name: t('ourStory.pastors.kPBabu.name'),
      tenure: t('ourStory.pastors.kPBabu.tenure'),
      years: t('ourStory.pastors.kPBabu.years'),
      isFounder: true
    },
    {
      id: 2,
      name: t('ourStory.pastors.pPDaniel.name'),
      tenure: t('ourStory.pastors.pPDaniel.tenure'),
      years: t('ourStory.pastors.pPDaniel.years')
    },
    {
      id: 3,
      name: t('ourStory.pastors.rajuKJ.name'),
      tenure: t('ourStory.pastors.rajuKJ.tenure'),
      years: t('ourStory.pastors.rajuKJ.years')
    },
    {
      id: 4,
      name: t('ourStory.pastors.rajuCS.name'),
      tenure: t('ourStory.pastors.rajuCS.tenure'),
      years: t('ourStory.pastors.rajuCS.years')
    },
    {
      id: 5,
      name: t('ourStory.pastors.josePaul.name'),
      tenure: t('ourStory.pastors.josePaul.tenure'),
      years: t('ourStory.pastors.josePaul.years')
    },
    {
      id: 6,
      name: t('ourStory.pastors.matthai.name'),
      tenure: t('ourStory.pastors.matthai.tenure'),
      years: t('ourStory.pastors.matthai.years')
    },
    {
      id: 7,
      name: t('ourStory.pastors.aby.name'),
      tenure: t('ourStory.pastors.aby.tenure'),
      years: t('ourStory.pastors.aby.years')
    },
    {
      id: 8,
      name: t('ourStory.pastors.roy.name'),
      tenure: t('ourStory.pastors.roy.tenure'),
      years: t('ourStory.pastors.roy.years')
    },
    {
      id: 9,
      name: t('ourStory.pastors.suresh.name'),
      tenure: t('ourStory.pastors.suresh.tenure'),
      years: t('ourStory.pastors.suresh.years'),
      isCurrent: true
    }
  ]

  return (
    <div>
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='story-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23story-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/8 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-accent-500/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">{t('ourStory.title')}</h1>
        </div>
      </section>

      {/* Our Beginning Section - Enhanced Story Layout */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10">
          {/* Opening Quote/Highlight */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block relative">
              <svg className="absolute -top-4 -left-4 w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient">
                Our Journey Begins
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Story Timeline Cards */}
          <div className="space-y-8">
            {/* Founding - 1989 */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 overflow-hidden">
                {/* Decorative Year Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
                    1989
                  </div>
                </div>

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-8 md:p-12">
                  {/* Chapter Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
                  </div>

                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary-600 first-letter:mr-2 first-letter:float-left first-letter:leading-none" dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph1').replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700 font-bold">$1</strong>') }} />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Establishment - 1990 */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-accent-200 overflow-hidden">
                {/* Decorative Year Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-gradient-to-br from-accent-600 to-accent-800 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
                    1990
                  </div>
                </div>

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-8 md:p-12">
                  {/* Chapter Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center shadow-medium">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent-300 to-transparent"></div>
                  </div>

                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    <p dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph2').replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent-700 font-bold">$1</strong>') }} />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Early Ministry */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-gold-200 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-8 md:p-12">
                  {/* Chapter Number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shadow-medium">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gold-300 to-transparent"></div>
                  </div>

                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph3').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold-700 font-bold">$1</strong>') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph4').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold-700 font-bold">$1</strong>') }} />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-gold-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>

            {/* Mission Work */}
            {t('ourStory.beginning.paragraph5') && (
              <div className="group relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 hover:border-primary-200 overflow-hidden">
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative p-8 md:p-12">
                    {/* Chapter Number */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                        <span className="text-white font-bold text-xl">4</span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
                    </div>

                    <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph5').replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700 font-bold">$1</strong>') }} />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>
            )}

            {/* New Building - 2025 */}
            {t('ourStory.beginning.paragraph6') && (
              <div className="group relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="relative bg-gradient-to-br from-primary-600 to-accent-700 rounded-3xl shadow-large hover:shadow-glow-lg transition-all duration-500 overflow-hidden">
                  {/* Decorative Year Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-white text-primary-700 px-6 py-3 rounded-2xl shadow-lg font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
                      2025
                    </div>
                  </div>

                  {/* Sparkle Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L52 18 L60 20 L52 22 L50 30 L48 22 L40 20 L48 18 Z M20 40 L21 45 L26 46 L21 47 L20 52 L19 47 L14 46 L19 45 Z M75 60 L76 64 L80 65 L76 66 L75 70 L74 66 L70 65 L74 64 Z' fill='white'/%3E%3C/svg%3E")`,
                      backgroundSize: '80px 80px'
                    }}></div>
                  </div>

                  <div className="relative p-8 md:p-12">
                    {/* Chapter Number */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-medium border-2 border-white/30">
                        <span className="text-white font-bold text-xl">5</span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
                    </div>

                    <div className="text-lg md:text-xl text-white leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: t('ourStory.beginning.paragraph6').replace(/\*\*(.*?)\*\*/g, '<strong class="text-yellow-200 font-bold">$1</strong>') }} />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>
            )}
          </div>

          {/* Closing Flourish */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-300"></div>
              <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-6 md:mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient">
              {t('ourStory.history.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('ourStory.history.description')}
            </p>
          </div>
          
          {/* Past Pastors Grid - Enhanced Modern Design */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            {pastPastors.map((pastor, index) => (
              <div
                key={pastor.id}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main Card Container with Advanced Hover Effects */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">

                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full"></div>

                  {/* Founder Badge - Premium Gold Design */}
                  {pastor.isFounder && (
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg border border-amber-400/50">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{t('ourStory.badges.founder')}</span>
                    </div>
                  )}

                  {/* Current Pastor Badge - Modern Green Design */}
                  {pastor.isCurrent && (
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg border border-emerald-400/50 animate-pulse">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span>{t('ourStory.badges.current')}</span>
                    </div>
                  )}

                  {/* Pastor Photo Container - Circular with Decorative Ring */}
                  <div className="relative pt-8 pb-4 px-6">
                    <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36">
                      {/* Decorative Rotating Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 p-1 group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
                      </div>

                      {/* Image Container */}
                      <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl z-10 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={pastor.isCurrent ? "/Pr.Suresh.jpg" : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"}
                          alt={pastor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Floating Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    </div>
                  </div>

                  {/* Pastor Information */}
                  <div className="relative px-6 pb-6 text-center z-10">
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {pastor.name}
                    </h3>

                    {/* Tenure and Years - Modern Chip Design */}
                    <div className="flex flex-col gap-2 items-center">
                      {/* Tenure Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-bold rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{pastor.tenure}</span>
                      </div>

                      {/* Years Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full group-hover:bg-accent-100 group-hover:text-accent-700 transition-colors duration-300">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{pastor.years}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
