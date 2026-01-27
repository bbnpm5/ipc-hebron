import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Youtube, MessageSquare, Sparkle, User, FileText, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send data to a backend API
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div>
      {/* Enhanced Page Banner with UI/UX Pro Max - Compact Design */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='contact-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23contact-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs - Reduced Size */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/8 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-accent-500/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay - Optimized */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        
        {/* Content - Compact Layout */}
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <div className="inline-block mb-3 md:mb-4 animate-fade-in">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <MessageSquare className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-2 md:mb-3 animate-slide-up">
            {t('pageTitles.contact')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 drop-shadow-lg max-w-2xl mx-auto animate-fade-in px-2">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Enhanced Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-gradient">
                  {t('contact.getInTouch')}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('contact.getInTouchText')}
                </p>
              </div>

              {/* Enhanced Address Card */}
              <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('contact.address')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      IPC Hebron<br />
                      Periyadka Road, Neria Post<br />
                      Belthangady TQ, D.K<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Phone Card */}
              <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('contact.phone')}</h3>
                    <a 
                      href="tel:9742555430" 
                      className="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors inline-flex items-center group/link"
                    >
                      <span>9742555430</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Email Card */}
              <div className="card-gradient group hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('contact.email')}</h3>
                    <a 
                      href="mailto:ipchebronneria@gmail.com" 
                      className="text-primary-600 hover:text-primary-700 font-semibold transition-colors inline-flex items-center group/link break-all"
                    >
                      <span>ipchebronneria@gmail.com</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Media Card */}
              <div className="card-gradient">
                <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                  <span className="w-0.5 h-5 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-2"></span>
                  {t('contact.followUs')}
                </h3>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="group relative w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-glow border border-gray-200 hover:border-blue-500/50"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    className="group relative w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-glow border border-gray-200 hover:border-pink-500/50"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    className="group relative w-12 h-12 bg-gray-100 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-glow border border-gray-200 hover:border-red-500/50"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">{t('contact.socialMediaComing')}</p>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="card-gradient animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-gradient">
                  {t('contact.sendMessage')}
                </h2>
                <p className="text-gray-600">We'd love to hear from you!</p>
              </div>
              
              {submitted ? (
                <div className="text-center py-12 md:py-16 animate-fade-in animate-scale-in">
                  <div className="inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-glow-lg animate-scale-in">
                      <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-gradient">
                    {t('contact.messageSent')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto mb-6">
                    {t('contact.thankYou')}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Sparkle className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <Sparkle className="w-6 h-6 text-yellow-400 animate-pulse delay-100" />
                    <Sparkle className="w-6 h-6 text-yellow-400 animate-pulse delay-200" />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary-600" />
                      {t('contact.fullName')} <span className="text-red-500 ml-1">{t('contact.required')}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>

                  {/* Email and Phone Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-primary-600" />
                        {t('contact.email')} <span className="text-red-500 ml-1">{t('contact.required')}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary-600" />
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary-600" />
                      {t('contact.subject')} <span className="text-red-500 ml-1">{t('contact.required')}</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-primary-600" />
                      {t('contact.message')} <span className="text-red-500 ml-1">{t('contact.required')}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200 resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center py-3.5 px-8 rounded-xl text-lg font-bold uppercase tracking-wider relative overflow-hidden group"
                  >
                    <Send className="w-5 h-5 mr-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10">{t('contact.send')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Enhanced Map Section */}
          <div className="mt-12 card-gradient overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 md:p-8 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('contact.findUs')}</h2>
                  <p className="text-gray-600 mt-1">{t('contact.visitUs')}</p>
                </div>
              </div>
            </div>
            <div className="h-96 md:h-[500px] w-full relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.7854978298392!2d75.42174799999998!3d13.008683000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4c938398d3c75%3A0xb69bc4914cb1813!2sI%20P%20C%20Hebron%20Church!5e1!3m2!1sen!2sca!4v1769200388608!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="IPC Hebron Church Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-700 text-center font-medium flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                IPC Hebron, Periyadka Road, Neria Post, Belthangady TQ, D.K, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
