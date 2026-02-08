import { useState } from 'react'
import { Heart, Send, CheckCircle, Sparkles, User, Mail, Phone, FileText, Loader2, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { sendPrayerRequestEmail } from '../config/emailjs'

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await sendPrayerRequestEmail(formData)
      
      // Success - show success message and reset form
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        request: '',
        anonymous: false
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      // Error - show error message, keep form data
      setError(err.message || 'Failed to send prayer request. Please try again.')
      console.error('Prayer request submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?w=1920&h=600&fit=crop&q=80)',
            filter: 'brightness(0.35) contrast(1.15) saturate(1.1)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            Prayer Request
          </h1>
        </div>
      </section>

      {/* Prayer Request Form Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          {submitted ? (
            <div className="relative bg-white rounded-3xl shadow-large p-12 md:p-16 text-center animate-fade-in border border-green-200">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-5 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-lg opacity-40"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-large">
                      <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>

                <div className="relative h-1 w-20 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700"></div>
                </div>

                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
                  Your prayer request has been received. Our prayer team will be lifting
                  you up in prayer. We believe in the power of prayer and trust that God
                  will hear and answer according to His will.
                </p>

                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-full border-2 border-green-200">
                  <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
                  <span className="text-sm font-semibold text-green-700">May God bless you</span>
                  <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Modern Form Card */}
              <div className="relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 p-8 md:p-10 animate-fade-in">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 hover:opacity-3 transition-opacity duration-700"></div>

                {/* Introduction */}
                <div className="relative z-10 mb-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Share Your Prayer Request
                  </h2>

                  <div className="relative h-1 w-20 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-6 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    We believe in the power of prayer. Please share your prayer request
                    with us, and our prayer team will intercede on your behalf. All
                    requests are kept confidential and handled with care.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {error && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-fade-in">
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
                    disabled={isLoading}
                    className="w-full group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-large hover:shadow-glow-lg hover:scale-[1.02] active:scale-100 disabled:hover:scale-100 overflow-hidden min-h-[56px]"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Submit Prayer Request
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>

              {/* Prayer Information Card */}
              <div className="mt-8 relative bg-white rounded-2xl shadow-soft p-6 md:p-8 animate-fade-in border border-gray-100">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 hover:opacity-3 transition-opacity duration-700 rounded-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    About Our Prayer Ministry
                  </h3>

                  <div className="relative h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Our prayer team is committed to interceding for every request we receive.
                    We believe that prayer changes things and that God hears and answers the
                    prayers of His people. Your requests are held in confidence and lifted up
                    with faith and compassion.
                  </p>
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
