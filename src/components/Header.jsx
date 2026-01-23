import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { 
      path: '/about', 
      label: 'ABOUT US', 
      hasDropdown: true,
      dropdown: [
        { path: '/about', label: 'About Us' },
        { path: '/ministries', label: 'Ministries' }
      ]
    },
    { path: '/events', label: 'EVENTS' },
    { path: '/services', label: 'SERVICES' },
    { path: '/prayer-request', label: 'COUNSELING' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/contact', label: 'CONTACT US' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28 px-4">
          {/* Logo and Church Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0 rounded-full overflow-hidden bg-white p-1.5">
              <img 
                src="/IPCLogo.jpg" 
                alt="IPC Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">IPC Hebron</h1>
              <p className="text-xs text-gray-300 hidden sm:block">Neria, Karnataka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className="px-4 py-2">
                      <Link
                        to={link.path}
                        className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-1 ${
                          isActive(link.path) || location.pathname === '/ministries'
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                    {isAboutOpen && (
                      <div className="absolute top-full left-0 z-50">
                        <div className="pt-2 bg-transparent">
                          <div className="bg-black border border-gray-800 rounded shadow-lg min-w-[200px]">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-2 text-sm transition-colors first:rounded-t last:rounded-b ${
                                  isActive(item.path)
                                    ? 'text-white bg-gray-900'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                                }`}
                                onClick={() => setIsAboutOpen(false)}
                              >
                                {item.label}
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
                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-black">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold uppercase text-gray-300 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAboutOpen && (
                        <div className="pl-4 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsAboutOpen(false)
                              }}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white"
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
                      className={`block px-4 py-2 text-sm font-semibold uppercase transition-colors ${
                        isActive(link.path)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
