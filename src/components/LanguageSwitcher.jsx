import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const isMalayalam = i18n.language.startsWith('ml')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Modern Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${
          isMalayalam
            ? 'space-x-1 px-2.5 py-2'
            : 'space-x-2 px-3 py-2'
        } ${isOpen ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' : ''}`}
        aria-label="Change language"
      >
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <Globe className={`relative z-10 group-hover:rotate-12 transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] ${
          isMalayalam ? 'w-4 h-4' : 'w-4 h-4 md:w-5 md:h-5'
        }`} />

        <span className={`relative z-10 font-bold hidden lg:inline drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] ${
          isMalayalam ? 'text-xs' : 'text-sm'
        }`}>
          {currentLanguage.nativeName}
        </span>

        <span className={`relative z-10 ${isMalayalam ? 'text-base' : 'text-lg'} drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]`}>
          {currentLanguage.flag}
        </span>

        <ChevronDown className={`relative z-10 transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] ${
          isMalayalam ? 'w-3 h-3' : 'w-3.5 h-3.5'
        } ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`} />
      </button>

      {/* Modern Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-48 animate-fade-in animate-slide-down">
          {/* Dropdown Container with Enhanced Styling */}
          <div className="relative bg-gradient-to-br from-black/98 via-black/95 to-black/98 border border-primary-400/50 rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.4)] backdrop-blur-xl overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-50"></div>

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>

            <div className="relative py-1.5">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`relative w-full text-left px-3 py-2.5 transition-all duration-300 flex items-center justify-between group/item ${
                    index === 0 ? 'rounded-t-2xl' : ''
                  } ${
                    index === languages.length - 1 ? 'rounded-b-2xl' : 'border-b border-gray-800/50'
                  } ${
                    i18n.language === lang.code
                      ? 'bg-gradient-to-r from-primary-600/50 to-accent-600/50 text-white shadow-[inset_0_0_20px_rgba(124,58,237,0.3)]'
                      : 'text-gray-100 hover:text-white hover:bg-gradient-to-r hover:from-primary-600/25 hover:to-accent-600/25'
                  }`}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-accent-500/0 group-hover/item:from-primary-500/10 group-hover/item:to-accent-500/10 transition-all duration-300 rounded-2xl"></div>

                  <div className="relative z-10 flex items-center space-x-2.5">
                    {/* Flag with Glow */}
                    <span className={`text-xl transition-transform duration-300 group-hover/item:scale-110 ${
                      i18n.language === lang.code ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''
                    }`}>
                      {lang.flag}
                    </span>

                    <div className="flex flex-col">
                      <span className={`font-bold text-sm transition-all duration-300 ${
                        i18n.language === lang.code
                          ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                          : 'group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]'
                      }`}>
                        {lang.nativeName}
                      </span>
                      <span className={`text-[10px] transition-colors duration-300 ${
                        i18n.language === lang.code
                          ? 'text-primary-200'
                          : 'text-gray-500 group-hover/item:text-gray-400'
                      }`}>
                        {lang.name}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {i18n.language === lang.code && (
                    <div className="relative z-10 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.8)]"></span>
                      <Check className="w-4 h-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" strokeWidth={3} />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="relative h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 opacity-50"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
