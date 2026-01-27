import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart, ArrowRight } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* Decorative Background Elements - Reduced */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-900/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-800/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main Footer Content - Compact */}
      <div className="container-custom py-8 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Church Info & Social */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden bg-white p-1.5 shadow-medium ring-1 ring-primary-500/20">
                <img
                  src="/IPCLogo.jpg"
                  alt="IPC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">{t('header.churchName')}</h3>
                <p className="text-xs text-gray-400">{t('header.location')}</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">Follow Us</p>
              <div className="flex space-x-2">
                <a 
                  href="#" 
                  className="group relative w-10 h-10 bg-gray-800/50 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700/30 hover:border-primary-500/50"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group relative w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700/30 hover:border-pink-500/50"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="group relative w-10 h-10 bg-gray-800/50 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700/30 hover:border-red-500/50"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-0.5 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-2"></span>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.home')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.aboutUs')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.ministries')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.events')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.services')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5 border-b border-gray-800/30 hover:border-primary-500/30">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.gallery')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center justify-between py-1.5">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full mr-3 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></span>
                    {t('nav.contact')}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-0.5 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-2"></span>
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-2.5">
              <li className="group">
                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 border border-gray-800/30 hover:border-primary-500/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-primary-600/20 group-hover:bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                    <MapPin className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-xs uppercase tracking-wide">{t('contact.address')}</p>
                    <p className="text-gray-400 leading-snug text-xs">IPC Hebron, Periyadka Road<br />Neria Post, Belthangady TQ<br />D.K, Karnataka, India</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 border border-gray-800/30 hover:border-primary-500/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-primary-600/20 group-hover:bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                    <Phone className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-xs uppercase tracking-wide">{t('contact.phone')}</p>
                    <a href="tel:9742555430" className="text-gray-400 hover:text-primary-400 transition-colors inline-block text-sm font-medium hover:underline">
                      9742555430
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 border border-gray-800/30 hover:border-primary-500/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-primary-600/20 group-hover:bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                    <Mail className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-xs uppercase tracking-wide">{t('contact.email')}</p>
                    <a href="mailto:ipchebronneria@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors break-all text-xs hover:underline">
                      ipchebronneria@gmail.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/30 bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 backdrop-blur-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Heart className="w-3 h-3 text-primary-400" />
              <p>IPC Hebron, Neria © {currentYear} All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
