import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Helmet>
        <title>About Us | IPC Hebron Neria</title>
        <meta name="description" content="Learn about IPC Hebron Neria – our faith, leadership, and mission as India Pentecostal Church in Neria, Wayanad." />
      </Helmet>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image - Church Community Theme */}
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">{t('pageTitles.about')}</h1>
        </div>
      </section>

      {/* Message from Pastor Suresh */}
      <section className="py-8 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-gradient">
              {t('about.pastorMessageTitle')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="card-gradient p-6 sm:p-8 md:p-10 lg:p-12 animate-fade-in">
            {/* Top Section: Photo and First Paragraphs Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-start mb-6 md:mb-8">
              {/* Pastor Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group w-full max-w-md lg:max-w-lg">
                  <div className="w-full rounded-2xl overflow-hidden shadow-large group-hover:shadow-glow-lg transition-all duration-300">
                    <img
                      src="/Pr.Suresh.K.E.png"
                      alt="Pastor K.E. Suresh"
                      className="w-full h-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>

              {/* First Part of Message Content */}
              <div className="space-y-4 md:space-y-5">
                <div className="space-y-4 md:space-y-5 text-gray-700 leading-relaxed font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl">
                  <p className="text-primary-700 text-lg md:text-xl lg:text-2xl">
                    {t('about.pastorGreeting')}
                  </p>

                  <p>
                    {t('about.pastorParagraph1')}
                  </p>

                  <p>
                    {t('about.pastorParagraph2')}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section: Full Width Remaining Text */}
            <div className="space-y-4 md:space-y-5 text-gray-700 leading-relaxed font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl">
              <p>
                {t('about.pastorParagraph3')}
              </p>

              <p>
                {t('about.pastorParagraph4')}
              </p>

              <p className="mt-6 text-gray-900 text-base md:text-lg">
                {t('about.pastorSignOff')}
              </p>
              <p className="text-primary-600 text-lg md:text-xl lg:text-2xl">
                {t('about.pastorName')}<br />
                {t('about.pastorRole')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Statement with UI/UX Pro Max */}
      <section className="py-8 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-gradient">
              {t('about.mission')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="card-gradient p-8 sm:p-10 md:p-12 lg:p-16 text-center animate-fade-in">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-serif italic max-w-5xl mx-auto">
              "{t('about.missionText')}"
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Governing Board Members with UI/UX Pro Max */}
      <section className="py-8 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-gradient uppercase tracking-wide">
              {t('about.governingBoardMembers')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              {t('about.governingBoardSubtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="card-gradient p-6 sm:p-8 md:p-10 lg:p-12 animate-fade-in">
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="/IPCNeriaBoardMembers.png"
                  alt="IPC Hebron Neria Governing Board Members"
                  className="w-full h-auto object-contain rounded-xl shadow-large group-hover:scale-105 transition-transform duration-500"
                />
                {/* Decorative Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
