import { Users, Heart, BookOpen, Cross, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">{t('pageTitles.about')}</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 drop-shadow-lg">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Enhanced Mission Statement with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-5xl relative z-10">
          <div className="card-gradient p-8 md:p-12 text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow-lg">
                <Cross className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-gradient">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif italic max-w-3xl mx-auto">
              "Our mission is to glorify God by proclaiming the Gospel of Jesus Christ, 
              being led by the Holy Spirit, making disciples, and demonstrating God's love 
              through worship, word, and works."
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              The foundational principles that guide our faith and ministry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Word of God */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Word of God
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We believe the Bible is the inspired Word of God and the foundation 
                for our faith and practice.
              </p>
            </div>
            
            {/* Love & Community */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Heart className="w-8 h-8 text-white" fill="currentColor" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                Love & Community
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We demonstrate God's love through our relationships and service to 
                one another and our community.
              </p>
            </div>
            
            {/* Discipleship */}
            <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-large group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-glow">
                <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                Discipleship
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We are committed to making disciples who follow Jesus and share 
                His message with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Pastor Suresh */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-6xl relative z-10">
          <div className="card-gradient p-8 md:p-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Pastor Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group">
                  <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-large group-hover:shadow-glow-lg transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                      alt="Pastor Suresh" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
              
              {/* Message Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-gradient">
                    Message
                  </h2>
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-600 mb-1">
                      Pr. Suresh
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Senior Pastor, IPC Hebron Neria
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p className="font-semibold text-primary-700">
                    Greetings in the precious name of our Lord and Savior Jesus Christ!
                  </p>
                  
                  <p>
                    I thank God for the amazing ways He has been leading us since the inception of the church in 1990. As a church, let us give thanks to the Lord for His faithfulness He has shown to us throughout these years.
                  </p>
                  
                  <p>
                    It gives me great pleasure to introduce you to the Church Website of IPC Hebron Neria. IPC Hebron is a spirit-filled Pentecostal church affiliated to Indian Pentecostal Church of God (IPC), Karnataka and serves as a healing community. We are committed to helping our church family gain victory over the daily concerns and challenges of life.
                  </p>
                  
                  <p>
                    Every human being seeks a place of fellowship, a place where he/she feels loved, a place where he/she can experience peace and joy. Here is a place where you can find the love of God and have fellowship of His chosen people.
                  </p>
                  
                  <p>
                    Jesus said, "Come to me, all you who are weary and burdened, and I will give you rest". In Jesus, you will find peace and the answers to all your worries and questions. So, let us stand together and worship the Lord in Truth and Spirit. I am hopeful that this website will be useful and will be a means of collaboration.
                  </p>
                  
                  <p className="mt-6 font-semibold text-gray-900">
                    Yours In Christ,
                  </p>
                  <p className="font-semibold text-primary-600">
                    Pr. Suresh<br />
                    Senior Pastor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Governing Board Members with UI/UX Pro Max */}
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
                <Users className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient uppercase tracking-wide">
              Governing Board Members
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Our dedicated leaders serving the church with vision and commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Senior Pastor */}
            <div className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {/* Decorative Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt="Pastor Suresh" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Pastor Suresh
                  </h3>
                  <div className="mb-3">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-bold rounded-full shadow-medium">
                      Senior Pastor
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Leading the congregation with vision and dedication, Pastor Suresh 
                    continues to guide IPC Hebron in its mission to serve God and the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Deacon/Elder 1 */}
            <div className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Decorative Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt="Church Elder" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors">
                    Church Elder
                  </h3>
                  <div className="mb-3">
                    <span className="px-4 py-1 bg-gradient-to-r from-accent-500 to-accent-700 text-white text-sm font-bold rounded-full shadow-medium">
                      Board Member
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Serving faithfully in church governance and providing spiritual 
                    guidance to support the ministry and vision of IPC Hebron.
                  </p>
                </div>
              </div>
            </div>

            {/* Deacon/Elder 2 */}
            <div className="card-gradient group relative overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square w-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt="Church Deacon" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    Church Deacon
                  </h3>
                  <div className="mb-3">
                    <span className="px-4 py-1 bg-gradient-to-r from-gold-500 to-gold-700 text-white text-sm font-bold rounded-full shadow-medium">
                      Board Member
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Committed to serving the church community and supporting the pastoral 
                    leadership in administrative and spiritual matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-gray-600 italic text-sm">
              Note: Please update with actual names and photos of current governing board members.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
