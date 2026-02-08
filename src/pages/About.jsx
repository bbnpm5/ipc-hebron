import { Users, Heart, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div>
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
              Message from Our Pastor
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
                    "Greetings in the precious name of our Lord and Savior Jesus Christ!
                  </p>

                  <p>
                  We're delighted that you've found your way to our website! This is where we share the latest happenings in our church family—from worship services to community gatherings and special events. No matter where you are on your faith journey—whether you've been with us for years, you're visiting for the first time, or you're simply exploring what it means to walk with God—you have a place here with us.
                  </p>

                  <p>
                  Our hope is that IPC Hebron Neria serves as a source of hope, strength, and community for everyone who desires to grow closer to God and build meaningful relationships with others.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section: Full Width Remaining Text */}
            <div className="space-y-4 md:space-y-5 text-gray-700 leading-relaxed font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl">
              <p>
              Take some time to browse through our site. You'll find inspiring messages, thoughtful reflections, and plenty of ways to connect with others and be refreshed in your faith. We invite you to join us for worship and discover the ministries that speak to you. Our desire is to walk alongside you, offering support and friendship as you continue your journey with Christ.
              </p>

              <p>
              We're grateful you're here. May we grow together in faith as the Holy Spirit leads and guides us.
              </p>

              <p className="mt-6 text-gray-900 text-base md:text-lg">
                Yours In Christ,
              </p>
              <p className="text-primary-600 text-lg md:text-xl lg:text-2xl">
                Pr. K.E. Suresh<br />
                Senior Pastor"
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
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="card-gradient p-8 sm:p-10 md:p-12 lg:p-16 text-center animate-fade-in">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-serif italic max-w-5xl mx-auto">
              "Our mission is to glorify God by proclaiming the Gospel of Jesus Christ,
              being led by the Holy Spirit, making disciples, and demonstrating God's love
              through worship, word, and works."
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values with UI/UX Pro Max */}
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
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              The foundational principles that guide our faith and ministry
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Word of God */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in p-6 sm:p-8" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors text-center">
                Word of God
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center">
                We believe the Bible is the inspired Word of God and the foundation
                for our faith and practice.
              </p>
            </div>

            {/* Love & Community */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in p-6 sm:p-8" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors text-center">
                Love & Community
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center">
                We demonstrate God's love through our relationships and service to
                one another and our community.
              </p>
            </div>

            {/* Discipleship */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in p-6 sm:p-8 sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors text-center">
                Discipleship
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center">
                We are committed to making disciples who follow Jesus and share
                His message with others.
              </p>
            </div>
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
              Governing Board Members
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Our dedicated leaders serving the church with vision and commitment
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
