import { useState } from 'react'
import { Heart, Send, CheckCircle } from 'lucide-react'

const PrayerRequest = () => {
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
      {/* Prayer Request Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-700">
                  Your prayer request has been received. Our prayer team will be lifting 
                  you up in prayer.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We believe in the power of prayer. Please share your prayer request 
                    with us, and our prayer team will intercede on your behalf. All 
                    requests are kept confidential and handled with care.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name {!formData.anonymous && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
                      Prayer Request <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please share your prayer request..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                      Submit anonymously
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Prayer Request
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Prayer Information */}
          <div className="mt-8 bg-primary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">About Our Prayer Ministry</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our prayer team is committed to interceding for every request we receive. 
              We believe that prayer changes things and that God hears and answers the 
              prayers of His people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> In production, prayer requests would be sent to a 
              secure backend system and can be managed through an admin panel. You may 
              want to integrate with email services or a database to store and manage requests.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrayerRequest
