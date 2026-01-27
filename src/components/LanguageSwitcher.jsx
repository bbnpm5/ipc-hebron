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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 hover:shadow-md group ${
          isMalayalam 
            ? 'space-x-1 px-2 py-1.5' 
            : 'space-x-1.5 px-2.5 py-1.5'
        }`}
        aria-label="Change language"
      >
        <Globe className={`group-hover:rotate-180 transition-transform duration-300 ${
          isMalayalam ? 'w-3.5 h-3.5' : 'w-4 h-4'
        }`} />
        <span className={`font-medium hidden lg:inline ${
          isMalayalam ? 'text-xs' : 'text-sm'
        }`}>{currentLanguage.nativeName}</span>
        <span className={isMalayalam ? 'text-sm' : 'text-base'}>{currentLanguage.flag}</span>
        <ChevronDown className={`transition-transform duration-200 ${
          isMalayalam ? 'w-2.5 h-2.5' : 'w-3 h-3'
        } ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-150 flex items-center justify-between group ${
                  i18n.language === lang.code
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium">{lang.nativeName}</span>
                    <span className={`text-xs ${i18n.language === lang.code ? 'text-primary-100' : 'text-gray-500'}`}>
                      {lang.name}
                    </span>
                  </div>
                </div>
                {i18n.language === lang.code && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
