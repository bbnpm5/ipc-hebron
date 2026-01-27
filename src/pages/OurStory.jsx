import { BookOpen, Calendar, Church } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const OurStory = () => {
  const { t } = useTranslation()
  
  const pastPastors = [
    {
      id: 1,
      name: t('ourStory.pastors.kPBabu.name'),
      tenure: t('ourStory.pastors.kPBabu.tenure'),
      years: t('ourStory.pastors.kPBabu.years'),
      description: t('ourStory.pastors.kPBabu.description'),
      isFounder: true
    },
    {
      id: 2,
      name: t('ourStory.pastors.pPDaniel.name'),
      tenure: t('ourStory.pastors.pPDaniel.tenure'),
      years: t('ourStory.pastors.pPDaniel.years'),
      description: t('ourStory.pastors.pPDaniel.description')
    },
    {
      id: 3,
      name: t('ourStory.pastors.rajuKJ.name'),
      tenure: t('ourStory.pastors.rajuKJ.tenure'),
      years: t('ourStory.pastors.rajuKJ.years'),
      description: t('ourStory.pastors.rajuKJ.description')
    },
    {
      id: 4,
      name: t('ourStory.pastors.rajuCS.name'),
      tenure: t('ourStory.pastors.rajuCS.tenure'),
      years: t('ourStory.pastors.rajuCS.years'),
      description: t('ourStory.pastors.rajuCS.description')
    },
    {
      id: 5,
      name: t('ourStory.pastors.josePaul.name'),
      tenure: t('ourStory.pastors.josePaul.tenure'),
      years: t('ourStory.pastors.josePaul.years'),
      description: t('ourStory.pastors.josePaul.description')
    },
    {
      id: 6,
      name: t('ourStory.pastors.matthai.name'),
      tenure: t('ourStory.pastors.matthai.tenure'),
      years: t('ourStory.pastors.matthai.years'),
      description: t('ourStory.pastors.matthai.description')
    },
    {
      id: 7,
      name: t('ourStory.pastors.aby.name'),
      tenure: t('ourStory.pastors.aby.tenure'),
      years: t('ourStory.pastors.aby.years'),
      description: t('ourStory.pastors.aby.description')
    },
    {
      id: 8,
      name: t('ourStory.pastors.roy.name'),
      tenure: t('ourStory.pastors.roy.tenure'),
      years: t('ourStory.pastors.roy.years'),
      description: t('ourStory.pastors.roy.description')
    },
    {
      id: 9,
      name: t('ourStory.pastors.suresh.name'),
      tenure: t('ourStory.pastors.suresh.tenure'),
      years: t('ourStory.pastors.suresh.years'),
      description: t('ourStory.pastors.suresh.description'),
      isCurrent: true
    }
  ]

  return (
    <div>
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
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
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <div className="inline-block mb-3 md:mb-4 animate-fade-in">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <BookOpen className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-2 md:mb-3 animate-slide-up">
            {t('ourStory.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 drop-shadow-lg max-w-2xl mx-auto animate-fade-in px-2">
            {t('ourStory.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Beginning Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-5xl relative z-10">
          <div className="card-gradient p-8 md:p-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow-lg">
                <Church className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center text-gradient">
              {t('ourStory.beginning.title')}
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              <p>
                {t('ourStory.beginning.paragraph1')}
              </p>
              <p>
                {t('ourStory.beginning.paragraph2')}
              </p>
              <p>
                {t('ourStory.beginning.paragraph3')}
              </p>
              <p>
                {t('ourStory.beginning.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow-lg">
                <Calendar className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient">
              {t('ourStory.history.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('ourStory.history.description')}
            </p>
          </div>
          
          {/* Past Pastors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {pastPastors.map((pastor, index) => (
              <div 
                key={pastor.id} 
                className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Founder Badge */}
                {pastor.isFounder && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-700 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-medium">
                    {t('ourStory.badges.founder')}
                  </div>
                )}
                
                {/* Current Pastor Badge */}
                {pastor.isCurrent && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-medium">
                    {t('ourStory.badges.current')}
                  </div>
                )}
                
                {/* Decorative Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
                
                {/* Pastor Photo */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt={pastor.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Pastor Info */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {pastor.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-xs font-bold rounded-full shadow-medium">
                      {pastor.tenure}
                    </div>
                    <span className="text-sm text-gray-600 font-semibold">
                      {pastor.years}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {pastor.description}
                  </p>
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
