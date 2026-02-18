const rawContactPhone = import.meta.env.VITE_CONTACT_PHONE || '8075029739'

export const CONTACT_PHONE = rawContactPhone.trim()
export const CONTACT_PHONE_LINK = `tel:${CONTACT_PHONE}`
export const CONTACT_PHONE_WHATSAPP = CONTACT_PHONE.replace(/[^0-9]/g, '')

