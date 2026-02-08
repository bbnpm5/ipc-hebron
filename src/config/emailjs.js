import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Initialize EmailJS with public key
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

/**
 * Send prayer request email via EmailJS
 * @param {Object} formData - Form data containing name, email, phone, request, anonymous
 * @returns {Promise} Promise that resolves when email is sent
 */
export const sendPrayerRequestEmail = async (formData) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  const templateParams = {
    from_name: formData.anonymous ? 'Anonymous' : (formData.name || 'Anonymous'),
    from_email: formData.email || 'Not provided',
    phone: formData.phone || 'Not provided',
    prayer_request: formData.request,
    submitted_at: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long'
    })
  }

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    return response
  } catch (error) {
    console.error('EmailJS error:', error)
    throw error
  }
}

/**
 * Send contact form email via EmailJS
 * @param {Object} formData - Form data containing name, email, phone, subject, message
 * @returns {Promise} Promise that resolves when email is sent
 */
export const sendContactEmail = async (formData) => {
  // Use contact template ID if available, otherwise fall back to main template ID
  const contactTemplateId = EMAILJS_CONTACT_TEMPLATE_ID || EMAILJS_TEMPLATE_ID
  
  if (!EMAILJS_SERVICE_ID || !contactTemplateId || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  const templateParams = {
    from_name: formData.name || 'Not provided',
    from_email: formData.email || 'Not provided',
    phone: formData.phone || 'Not provided',
    subject: formData.subject || 'No subject',
    message: formData.message,
    submitted_at: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long'
    })
  }

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      contactTemplateId,
      templateParams
    )
    return response
  } catch (error) {
    console.error('EmailJS error:', error)
    throw error
  }
}

export default emailjs
