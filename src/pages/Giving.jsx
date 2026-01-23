import { useState } from 'react'
import { Heart, CreditCard, Building2, QrCode, CheckCircle, Currency } from 'lucide-react'

const Giving = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    paymentMethod: 'upi',
    recurring: false,
    message: ''
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
    // In production, this would integrate with a payment gateway
    console.log('Donation submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: '',
        paymentMethod: 'upi',
        recurring: false,
        message: ''
      })
    }, 3000)
  }

  const quickAmounts = [500, 1000, 2000, 5000, 10000]

  return (
    <div>
      {/* Giving Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Why We Give</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver." 
              - 2 Corinthians 9:7
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your generous giving helps us continue our mission of spreading the Gospel, 
              supporting our community, and maintaining our church facilities. Every 
              contribution, no matter the size, makes a difference in advancing God's kingdom.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-700">
                Your donation has been received. We appreciate your generous support 
                of our ministry.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3 mb-3">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                        className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                          formData.amount === amount.toString()
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        <Currency className="w-4 h-4 inline mr-1" />
                        ₹{amount.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 font-semibold">₹</span>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="Enter custom amount"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'upi'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <QrCode className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                      <div className="text-center font-semibold">UPI</div>
                    </label>
                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                      <div className="text-center font-semibold">Card</div>
                    </label>
                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition-colors ${
                      formData.paymentMethod === 'bank'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Building2 className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                      <div className="text-center font-semibold">Bank Transfer</div>
                    </label>
                  </div>
                </div>

                {/* UPI QR Code Placeholder */}
                {formData.paymentMethod === 'upi' && (
                  <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-200">
                    <h3 className="text-lg font-semibold mb-4 text-center">UPI Payment</h3>
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-6 rounded-lg mb-4 border-2 border-dashed border-primary-300">
                        <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
                          <QrCode className="w-32 h-32 text-gray-400" />
                        </div>
                        <p className="text-center text-sm text-gray-600 mt-2">QR Code Placeholder</p>
                      </div>
                      <p className="text-sm text-gray-700 text-center max-w-md">
                        Scan the QR code with your UPI app to make a payment. 
                        In production, this will display your actual UPI QR code.
                      </p>
                      <div className="mt-4 bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-700">UPI ID:</p>
                        <p className="text-lg text-primary-600 font-mono">ipchebron@upi</p>
                        <p className="text-xs text-gray-500 mt-1">(To be configured)</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Donor Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="recurring"
                        checked={formData.recurring}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Make this a recurring donation</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any special instructions or notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-3"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          )}

          {/* Bank Transfer Information */}
          <div className="mt-8 bg-primary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Bank Transfer Details</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Account Name:</strong> IPC Hebron, Neria</p>
              <p><strong>Account Number:</strong> [To be provided]</p>
              <p><strong>IFSC Code:</strong> [To be provided]</p>
              <p><strong>Bank Name:</strong> [To be provided]</p>
              <p><strong>Branch:</strong> [To be provided]</p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              For bank transfer, please include your name and phone number in the transaction 
              remarks. After transfer, email us at ipchebronneria@gmail.com with the 
              transaction details for receipt.
            </p>
          </div>

          {/* Payment Gateway Integration Note */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This is a sample donation form. For production, integrate 
              with a payment gateway like Razorpay, PayU, or Instamojo for secure payment 
              processing. These services support UPI, cards, net banking, and wallets. 
              Contact the payment gateway provider to set up your merchant account.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Giving
