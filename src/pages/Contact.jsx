import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Youtube, MessageSquare, Sparkle, User, FileText, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { sendContactEmail } from '../config/emailjs'

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await sendContactEmail(formData)
      
      // Success - show success message and reset form
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      // Error - show error message, keep form data
      setError(err.message || 'Failed to send message. Please try again.')
      console.error('Contact form submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Page Banner - Matching About Page Style */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            {t('pageTitles.contact')}
          </h1>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-custom max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Modern Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {t('contact.getInTouch')}
                </h2>
                {/* Horizontal Divider */}
                <div className="relative h-1 w-20 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 w-full"></div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {t('contact.getInTouchText')}
                </p>
              </div>

              {/* Modern Address Card */}
              <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative p-5 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-primary-600 transition-colors duration-300">
                        {t('contact.address')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        IPC Hebron, Basthi,<br />
                        Neria Post, Belthangady TQ<br />
                        D.K, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Modern Phone Card */}
              <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-accent-200">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative p-5 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-accent-600 transition-colors duration-300">
                        {t('contact.phone')}
                      </h3>
                      <a
                        href="tel:8075029739"
                        className="text-primary-600 hover:text-primary-700 font-semibold text-base transition-colors inline-flex items-center group/link"
                      >
                        <span>8075029739</span>
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-accent-500 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Modern Email Card */}
              <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gold-200">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative p-5 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-gold-600 transition-colors duration-300">
                        {t('contact.email')}
                      </h3>
                      <a
                        href="mailto:ipchebronneria@gmail.com"
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors inline-flex items-center group/link break-all"
                      >
                        <span>ipchebronneria@gmail.com</span>
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-gold-500 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Modern Social Media Card */}
              <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative p-5 md:p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-base group-hover:text-primary-600 transition-colors duration-300">
                    {t('contact.followUs')}
                  </h3>
                  {/* Horizontal Divider */}
                  <div className="relative h-0.5 w-12 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="group/social w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200 hover:border-transparent"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="group/social w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200 hover:border-transparent"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="group/social w-11 h-11 bg-gray-100 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200 hover:border-transparent"
                      aria-label="YouTube"
                      title="YouTube"
                    >
                      <Youtube className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-3 transition-opacity duration-700"></div>

              <div className="relative p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {t('contact.sendMessage')}
                  </h2>
                  {/* Horizontal Divider */}
                  <div className="relative h-1 w-20 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 w-full"></div>
                  </div>
                  <p className="text-gray-600 text-base">We'd love to hear from you!</p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 md:py-14 animate-fade-in">
                    <div className="inline-block mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-lg opacity-50"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-large">
                          <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {t('contact.messageSent')}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-6">
                      {t('contact.thankYou')}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <Sparkle className="w-5 h-5 text-gold-500 animate-pulse" />
                      <Sparkle className="w-5 h-5 text-gold-500 animate-pulse delay-100" />
                      <Sparkle className="w-5 h-5 text-gold-500 animate-pulse delay-200" />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-red-900 mb-1">Error</p>
                            <p className="text-sm text-red-700">{error}</p>
                            <button
                              type="button"
                              onClick={() => setError(null)}
                              className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium underline"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.fullName')} <span className="text-red-500">{t('contact.required')}</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-primary-300 transition-all duration-200"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.email')} <span className="text-red-500">{t('contact.required')}</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-primary-300 transition-all duration-200"
                          placeholder={t('contact.emailPlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-primary-300 transition-all duration-200"
                          placeholder={t('contact.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.subject')} <span className="text-red-500">{t('contact.required')}</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-primary-300 transition-all duration-200"
                        placeholder={t('contact.subjectPlaceholder')}
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.message')} <span className="text-red-500">{t('contact.required')}</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-primary-300 transition-all duration-200 resize-none"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center group/btn"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          <span>{t('contact.send')}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          </div>

          {/* Modern Map Section */}
          <div className="mt-10 group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-3 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative p-5 md:p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {t('contact.findUs')}
                  </h2>
                  <p className="text-gray-600 text-sm mt-0.5">{t('contact.visitUs')}</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 md:h-96 w-full overflow-hidden">
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

            <div className="relative p-4 md:p-5 border-t border-gray-100 bg-gray-50">
              <p className="text-xs md:text-sm text-gray-600 text-center font-medium flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                <span>IPC Hebron, Basthi, Neria Post, Belthangady TQ, D.K, Karnataka, India</span>
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
