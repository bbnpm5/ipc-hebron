// Church contact number, used by WhatsApp, the footer and the Contact page.
// Set VITE_CONTACT_PHONE as a normal Indian mobile number (8075029737);
// +91, 91 or a leading 0 are also fine.
const rawContactPhone = import.meta.env.VITE_CONTACT_PHONE || '8075029737'

const COUNTRY_CODE = '91' // India

// Full international number, digits only (e.g. 918075029737).
// WhatsApp links and international callers need the country code.
const toInternational = (phone) => {
  let digits = phone.replace(/[^0-9]/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2) // 0091…
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1) // 08075…
  if (digits.length === 10) digits = COUNTRY_CODE + digits // 8075029737
  return digits
}

/** Number as shown on the page */
export const CONTACT_PHONE = rawContactPhone.trim()
const INTERNATIONAL = toInternational(CONTACT_PHONE)

/** Tap-to-call link; works from India and abroad */
export const CONTACT_PHONE_LINK = `tel:+${INTERNATIONAL}`

/** For https://wa.me/<number> */
export const CONTACT_PHONE_WHATSAPP = INTERNATIONAL
