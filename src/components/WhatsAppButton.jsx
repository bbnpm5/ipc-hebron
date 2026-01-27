import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X, MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '9742555430'
  const message = encodeURIComponent('Hello, I would like to know more about IPC Hebron.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const handleStartChat = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className={`fixed bottom-24 right-2 sm:right-4 md:right-6 z-50 w-[calc(100vw-1rem)] sm:w-80 md:w-96 max-w-[calc(100vw-1rem)] sm:max-w-none bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/IPCLogo.jpg" 
                    alt="IPC Hebron" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate">{t('whatsapp.contactName', 'IPC Hebron')}</h3>
                <p className="text-xs text-green-100 truncate">{t('whatsapp.replyTime', 'Typically replies within an hour')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-2 p-1 hover:bg-[#064e46] rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="bg-[#ECE5DD] h-64 p-4 overflow-y-auto" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='whatsapp-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23d4d4d4' opacity='0.3'/%3E%3Ccircle cx='80' cy='40' r='1' fill='%23d4d4d4' opacity='0.3'/%3E%3Ccircle cx='40' cy='60' r='1' fill='%23d4d4d4' opacity='0.3'/%3E%3Ccircle cx='70' cy='80' r='1' fill='%23d4d4d4' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23whatsapp-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '400px'
          }}>
            {/* Welcome Message Bubble */}
            <div className="flex justify-start mb-4">
              <div className="bg-white rounded-lg shadow-sm max-w-[80%] p-3">
                <p className="text-sm text-gray-800 mb-1">
                  {t('whatsapp.welcomeMessage', 'Hi there 👋')}
                </p>
                <p className="text-sm text-gray-800">
                  {t('whatsapp.helpMessage', 'How can I help you?')}
                </p>
                <span className="text-xs text-gray-500 mt-1 block text-right">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
              </div>
            </div>
          </div>

          {/* Start Chat Button */}
          <div className="bg-[#075E54] p-4">
            <button
              onClick={handleStartChat}
              className="w-full bg-white text-[#075E54] py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('whatsapp.startChat', 'Start Chat')}</span>
            </button>
          </div>
        </div>

      {/* Floating WhatsApp Button - UI/UX Pro Max Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#1DA851] text-white rounded-full shadow-glow-lg transition-all duration-300 hover:scale-110 hover:shadow-glow-xl active:scale-95 group relative overflow-hidden"
        style={{ 
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          left: 'unset',
          top: 'unset',
          width: '56px',
          height: '56px'
        }}
        onTouchStart={(e) => e.stopPropagation()}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        title={isOpen ? "Close chat" : "Contact us on WhatsApp"}
      >
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-[#25D366]/0 group-hover:bg-[#25D366]/40 rounded-full blur-2xl transition-all duration-300 animate-pulse"></div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Button Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {isOpen ? (
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
          ) : (
            <>
              <svg 
                className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {/* Enhanced Notification Dot */}
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white shadow-lg animate-pulse flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </>
          )}
        </div>
        
        {/* Ripple Effect on Click */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-150 opacity-0 group-active:opacity-100 transition-all duration-300"></div>
        
        <span className="sr-only">WhatsApp</span>
      </button>
    </>
  )
}

export default WhatsAppButton
