import { useTranslation } from 'react-i18next'
import { BookOpen, Cross, Users, Heart, Shield, Star } from 'lucide-react'

const StatementOfFaith = () => {
  const { t } = useTranslation()

  const statements = [
    {
      id: 1,
      title: t('statementOfFaith.triuneGod.title'),
      content: t('statementOfFaith.triuneGod.content'),
      verses: t('statementOfFaith.triuneGod.verses'),
      icon: Shield,
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      id: 2,
      title: t('statementOfFaith.godFather.title'),
      content: t('statementOfFaith.godFather.content'),
      verses: t('statementOfFaith.godFather.verses'),
      icon: Heart,
      gradient: 'from-accent-500 to-accent-700'
    },
    {
      id: 3,
      title: t('statementOfFaith.jesusChrist.title'),
      content: t('statementOfFaith.jesusChrist.content'),
      verses: t('statementOfFaith.jesusChrist.verses'),
      icon: Cross,
      gradient: 'from-gold-500 to-gold-700'
    },
    {
      id: 4,
      title: t('statementOfFaith.holyScriptures.title'),
      content: t('statementOfFaith.holyScriptures.content'),
      verses: t('statementOfFaith.holyScriptures.verses'),
      icon: BookOpen,
      gradient: 'from-primary-600 to-accent-600'
    },
    {
      id: 5,
      title: t('statementOfFaith.holySpirit.title'),
      content: t('statementOfFaith.holySpirit.content'),
      verses: t('statementOfFaith.holySpirit.verses'),
      icon: Star,
      gradient: 'from-accent-500 to-primary-600'
    },
    {
      id: 6,
      title: t('statementOfFaith.giftsBaptism.title'),
      content: t('statementOfFaith.giftsBaptism.content'),
      verses: t('statementOfFaith.giftsBaptism.verses'),
      icon: Star,
      gradient: 'from-gold-500 to-primary-600'
    },
    {
      id: 7,
      title: t('statementOfFaith.salvation.title'),
      content: t('statementOfFaith.salvation.content'),
      verses: t('statementOfFaith.salvation.verses'),
      icon: Heart,
      gradient: 'from-primary-500 to-accent-700'
    },
    {
      id: 8,
      title: t('statementOfFaith.sinNewBirth.title'),
      content: t('statementOfFaith.sinNewBirth.content'),
      verses: t('statementOfFaith.sinNewBirth.verses'),
      icon: Cross,
      gradient: 'from-accent-600 to-gold-600'
    },
    {
      id: 9,
      title: t('statementOfFaith.layingOnHands.title'),
      content: t('statementOfFaith.layingOnHands.content'),
      verses: t('statementOfFaith.layingOnHands.verses'),
      icon: Heart,
      gradient: 'from-primary-600 to-primary-800'
    },
    {
      id: 10,
      title: t('statementOfFaith.church.title'),
      content: t('statementOfFaith.church.content'),
      verses: t('statementOfFaith.church.verses'),
      icon: Users,
      gradient: 'from-accent-500 to-primary-700'
    },
    {
      id: 11,
      title: t('statementOfFaith.ordinances.title'),
      content: t('statementOfFaith.ordinances.content'),
      verses: t('statementOfFaith.ordinances.verses'),
      icon: BookOpen,
      gradient: 'from-gold-500 to-accent-600'
    },
    {
      id: 12,
      title: t('statementOfFaith.sanctification.title'),
      content: t('statementOfFaith.sanctification.content'),
      verses: t('statementOfFaith.sanctification.verses'),
      icon: Shield,
      gradient: 'from-primary-500 to-gold-600'
    },
    {
      id: 13,
      title: t('statementOfFaith.lastThings.title'),
      content: t('statementOfFaith.lastThings.content'),
      verses: t('statementOfFaith.lastThings.verses'),
      icon: Star,
      gradient: 'from-accent-600 to-primary-800'
    }
  ]

  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='cross' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50 20 L50 80 M20 50 L80 50' stroke='white' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23cross)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
            {t('statementOfFaith.title')}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto drop-shadow-lg">
            {t('statementOfFaith.subtitle')}
          </p>
        </div>
      </section>

      {/* Statement of Faith Content */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-6 md:gap-8">
            {statements.map((statement, index) => {
              const IconComponent = statement.icon
              return (
                <div
                  key={statement.id}
                  className="card group relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${statement.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 md:space-x-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${statement.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-primary-600 transition-colors">
                            {statement.id}
                          </span>
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {statement.title}
                          </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                          {statement.content}
                        </p>
                        <div className="flex items-start space-x-2">
                          <BookOpen className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                          <p className="text-sm md:text-base text-primary-600 font-medium italic">
                            {statement.verses}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StatementOfFaith
