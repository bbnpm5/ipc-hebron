import { useState } from 'react'
import { Heart, Send, CheckCircle, Sparkles, User, Mail, Phone, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const PrayerRequest = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    anonymous: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send data to a backend API
    console.log('Prayer request submitted:', formData)
    
    // Simulate submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        request: '',
        anonymous: false
      })
    }, 3000)
  }

  return (
    <div>
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-20 md:py-28 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='prayer-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50 20 L50 80 M20 50 L80 50' stroke='%23ffffff' stroke-width='1' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23prayer-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-900/85"></div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-4 animate-slide-up">
            {t('pageTitles.counseling')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 drop-shadow-lg max-w-3xl mx-auto animate-fade-in">
            {t('prayer.subtitle')}
          </p>
        </div>
      </section>

      {/* Prayer Request Form Section with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-3xl relative z-10">
          {submitted ? (
            <div className="card-gradient text-center py-12 md:py-16 animate-fade-in animate-scale-in">
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-glow-lg animate-scale-in">
                  <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Your prayer request has been received. Our prayer team will be lifting 
                you up in prayer. We believe in the power of prayer and trust that God 
                will hear and answer according to His will.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-2 text-primary-600">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">May God bless you</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          ) : (
            <>
              {/* Enhanced Form Card */}
              <div className="card-gradient p-8 md:p-10 animate-fade-in">
                {/* Introduction */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-4 shadow-medium">
                    <Heart className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto">
                    We believe in the power of prayer. Please share your prayer request 
                    with us, and our prayer team will intercede on your behalf. All 
                    requests are kept confidential and handled with care.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <User className="w-4 h-4 mr-2 text-primary-600" />
                      Name {!formData.anonymous && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed shadow-soft hover:shadow-medium"
                        placeholder="Your name"
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-primary-600" />
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white shadow-soft hover:shadow-medium"
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-primary-600" />
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white shadow-soft hover:shadow-medium"
                        placeholder="Your phone number"
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Prayer Request Field */}
                  <div className="group">
                    <label htmlFor="request" className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <FileText className="w-4 h-4 mr-2 text-primary-600" />
                      Prayer Request <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="request"
                        name="request"
                        value={formData.request}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white shadow-soft hover:shadow-medium resize-none"
                        placeholder="Please share your prayer request..."
                      />
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Anonymous Checkbox */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border-2 border-primary-100">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 cursor-pointer"
                    />
                    <label htmlFor="anonymous" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                      Submit anonymously
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-large hover:shadow-glow-lg hover:scale-[1.02] active:scale-100 overflow-hidden min-h-[56px]"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Prayer Request
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>

              {/* Enhanced Prayer Information Card */}
              <div className="mt-8 card-gradient p-6 md:p-8 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">About Our Prayer Ministry</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our prayer team is committed to interceding for every request we receive. 
                      We believe that prayer changes things and that God hears and answers the 
                      prayers of His people. Your requests are held in confidence and lifted up 
                      with faith and compassion.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default PrayerRequest
