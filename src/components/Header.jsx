import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const location = useLocation()
  const isMalayalam = i18n.language.startsWith('ml')
  const isKannada = i18n.language.startsWith('kn')

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { 
      path: '/about', 
      label: t('nav.about'), 
      hasDropdown: true,
      dropdown: [
        { path: '/about', label: t('nav.aboutUs') },
        { path: '/our-story', label: t('nav.ourStory', 'Our Story') },
        { path: '/statement-of-faith', label: t('nav.statementOfFaith') },
        { path: '/ministries', label: t('nav.ministries') }
      ]
    },
    { path: '/events', label: t('nav.events') },
    { path: '/services', label: t('nav.services') },
    { path: '/prayer-request', label: t('nav.counseling') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-glow">
      {/* Enhanced Glassmorphism Background with Animated Gradients */}
      <div 
        className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-black/85 via-black/75 to-black/85 border-b border-primary-500/20 bg-fixed md:bg-fixed"
        style={{
          backgroundImage: 'url(/Home_BackgroundScreen.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-900/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <nav className="container-custom relative z-10">
        <div className={`flex items-center justify-between h-20 md:h-24 px-3 md:px-4 lg:px-6 w-full ${
          isKannada ? 'gap-2 md:gap-3' : 'gap-4'
        }`}>
          {/* Logo and Church Name with Enhanced Styling */}
          <Link to="/" className={`group flex items-center flex-shrink-0 transition-all duration-300 hover:scale-105 ${
            isMalayalam 
              ? 'min-w-0 gap-2 md:gap-3' 
              : isKannada 
                ? 'max-w-[160px] md:max-w-[180px] lg:max-w-[200px] gap-1.5 md:gap-2' 
                : 'max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] gap-2 md:gap-3'
          }`}>
            <div className={`relative flex items-center justify-center flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-white to-gray-100 shadow-large transition-all duration-300 group-hover:shadow-glow group-hover:scale-110 ${
              isMalayalam 
                ? 'w-14 h-14 md:w-16 md:h-16 p-1.5 ring-2 ring-primary-500/30 group-hover:ring-primary-500/60' 
                : isKannada
                  ? 'w-11 h-11 md:w-12 md:h-12 p-1 ring-2 ring-primary-500/30 group-hover:ring-primary-500/60'
                  : 'w-12 h-12 md:w-14 md:h-14 p-1 ring-2 ring-primary-500/30 group-hover:ring-primary-500/60'
            }`}>
              <img 
                src="/IPCLogo.jpg" 
                alt="IPC Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 rounded-full transition-all duration-300"></div>
            </div>
            <div className="min-w-0 flex-1">
              {isMalayalam ? (
                <div>
                  <h1 className="font-bold text-white leading-tight text-lg md:text-xl lg:text-2xl drop-shadow-lg group-hover:text-primary-200 transition-colors duration-300">
                    <span className="block bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">ഐപിസി</span>
                    <span className="block bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">ഹെബ്രോൺ</span>
                  </h1>
                  <p className="text-[10px] text-gray-300 hidden sm:block leading-tight mt-1 truncate max-w-[220px] xl:max-w-none group-hover:text-gray-200 transition-colors">{t('header.location')}</p>
                </div>
              ) : isKannada ? (
                <div className="min-w-0">
                  <h1 className="font-bold text-white leading-tight text-sm md:text-base lg:text-lg whitespace-normal break-words drop-shadow-lg group-hover:text-primary-200 transition-colors duration-300 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                    {t('header.churchName')}
                  </h1>
                  <p className="text-[9px] md:text-[10px] text-gray-300 hidden sm:block leading-tight whitespace-normal break-words group-hover:text-gray-200 transition-colors">{t('header.location')}</p>
                </div>
              ) : (
                <div className="min-w-0">
                  <h1 className="font-bold text-white leading-tight text-base md:text-lg lg:text-xl truncate drop-shadow-lg group-hover:text-primary-200 transition-colors duration-300 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                    {t('header.churchName')}
                  </h1>
                  <p className="text-[10px] md:text-xs text-gray-300 hidden sm:block leading-tight truncate group-hover:text-gray-200 transition-colors">{t('header.location')}</p>
                </div>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden ${
            isMalayalam ? 'xl:flex' : isKannada ? 'xl:flex' : 'lg:flex'
          } items-center ${isKannada ? 'flex-shrink-0' : 'flex-1'} justify-end min-w-0 ${
            isKannada ? 'ml-0' : 'ml-2'
          } ${
            isMalayalam 
              ? 'space-x-1 md:space-x-2 lg:space-x-2' 
              : isKannada
                ? 'space-x-0.5 md:space-x-1 lg:space-x-1.5'
                : 'space-x-1 md:space-x-2 lg:space-x-3'
          }`}>
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className={`py-2 ${
                      isMalayalam 
                        ? 'px-2 md:px-2.5 lg:px-3' 
                        : isKannada
                          ? 'px-1.5 md:px-2 lg:px-2.5'
                          : 'px-3 md:px-4 lg:px-5'
                    }`}>
                      <Link
                        to={link.path}
                        className={`relative font-semibold uppercase tracking-wide transition-all duration-300 flex items-center space-x-1 whitespace-nowrap group/link ${
                          isMalayalam 
                            ? 'text-[10px] md:text-xs' 
                            : isKannada
                              ? 'text-[9px] md:text-[10px] lg:text-xs'
                              : 'text-xs md:text-sm'
                        } ${
                          isActive(link.path) || location.pathname === '/ministries' || location.pathname === '/statement-of-faith'
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <ChevronDown className={`transition-all duration-300 flex-shrink-0 ${
                          isMalayalam ? 'w-3 h-3' : 'w-3 h-3 md:w-4 md:h-4'
                        } ${isAboutOpen ? 'rotate-180' : ''} group-hover/link:scale-110`} />
                        {/* Hover underline effect */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${
                          isActive(link.path) || location.pathname === '/ministries' || location.pathname === '/statement-of-faith'
                            ? 'w-full'
                            : 'w-0 group-hover/link:w-full'
                        }`}></span>
                      </Link>
                    </div>
                    {isAboutOpen && (
                      <div className="absolute top-full left-0 z-50 animate-fade-in animate-slide-down">
                        <div className="pt-2 bg-transparent">
                          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-primary-500/30 rounded-lg shadow-glow-lg backdrop-blur-xl min-w-[200px] overflow-hidden">
                            {link.dropdown.map((item, index) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`group/dropdown relative block px-4 py-3 text-sm transition-all duration-300 ${
                                  index === 0 ? 'rounded-t-lg' : ''
                                } ${
                                  index === link.dropdown.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-800/50'
                                } ${
                                  isActive(item.path)
                                    ? 'text-white bg-gradient-to-r from-primary-600/30 to-primary-700/30'
                                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary-600/20 hover:to-primary-700/20'
                                }`}
                                onClick={() => setIsAboutOpen(false)}
                              >
                                <span className="relative z-10 flex items-center">
                                  <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                                    isActive(item.path)
                                      ? 'bg-primary-400 scale-150'
                                      : 'bg-primary-500/50 group-hover/dropdown:bg-primary-400 group-hover/dropdown:scale-150'
                                  }`}></span>
                                  {item.label}
                                </span>
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-primary-500/0 group-hover/dropdown:bg-primary-500/10 transition-all duration-300"></div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative py-2 font-semibold uppercase tracking-wide transition-all duration-300 whitespace-nowrap group/link ${
                      isMalayalam 
                        ? 'px-2 md:px-2.5 lg:px-3 text-[10px] md:text-xs' 
                        : isKannada
                          ? 'px-1.5 md:px-2 lg:px-2.5 text-[9px] md:text-[10px] lg:text-xs'
                          : 'px-3 md:px-4 lg:px-5 text-xs md:text-sm'
                    } ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 transition-all duration-300 shadow-glow ${
                      isActive(link.path)
                        ? 'w-full'
                        : 'w-0 group-hover/link:w-full'
                    }`}></span>
                    {/* Hover glow background */}
                    <span className={`absolute inset-0 bg-primary-500/0 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-primary-500/10'
                        : 'group-hover/link:bg-primary-500/10'
                    }`}></span>
                  </Link>
                )}
              </div>
            ))}
            {/* Language Switcher next to Contact Us */}
            <div className={`border-l border-primary-500/30 flex-shrink-0 ${
              isMalayalam 
                ? 'ml-2 pl-2' 
                : 'ml-3 md:ml-4 pl-3 md:pl-4'
            }`}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button with Enhanced Styling */}
          <button
            className={`${
              isMalayalam ? 'xl:hidden' : isKannada ? 'xl:hidden' : 'lg:hidden'
            } relative p-2.5 text-white flex-shrink-0 rounded-lg bg-primary-600/20 hover:bg-primary-600/40 border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 hover:scale-110 hover:shadow-glow`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="transition-transform duration-300" /> : <Menu size={24} className="transition-transform duration-300" />}
          </button>
        </div>

        {/* Mobile Navigation with Enhanced Styling */}
        {isMenuOpen && (
          <div className={`${
            isMalayalam ? 'xl:hidden' : isKannada ? 'xl:hidden' : 'lg:hidden'
          } border-t border-primary-500/30 bg-gradient-to-b from-black/95 to-black backdrop-blur-xl animate-fade-in animate-slide-down`}>
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-primary-600/20 border border-transparent hover:border-primary-500/30"
                      >
                        <span className="text-left">{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAboutOpen && (
                        <div className="pl-6 space-y-2 mt-2 animate-fade-in">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsAboutOpen(false)
                              }}
                              className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-primary-600/20 hover:to-primary-700/20 border border-transparent hover:border-primary-500/30"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-semibold uppercase transition-all duration-300 rounded-lg border ${
                        isActive(link.path)
                          ? 'text-white bg-gradient-to-r from-primary-600/30 to-primary-700/30 border-primary-500/50 shadow-glow'
                          : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary-600/20 hover:to-primary-700/20 border-transparent hover:border-primary-500/30'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Language Switcher in mobile menu */}
              <div className="px-4 py-3 border-t border-gray-800 mt-4 pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
