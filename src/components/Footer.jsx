import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-800/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container-custom py-6 md:py-7 lg:py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {/* Church Info & Social */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden bg-white p-1.5 shadow-lg ring-2 ring-primary-500/30">
                <img
                  src="/IPCLogo.jpg"
                  alt="IPC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-0.5 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">IPC Hebron</h3>
                <p className="text-xs text-gray-400 leading-tight">Neria, Karnataka</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">Connect With Us</p>
              <div className="flex space-x-2.5">
                <a
                  href="#"
                  className="group relative w-9 h-9 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-primary-600 hover:to-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-gray-700/50 hover:border-primary-500/80"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative w-9 h-9 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] border border-gray-700/50 hover:border-pink-500/80"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative w-9 h-9 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-red-600 hover:to-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-gray-700/50 hover:border-red-500/80"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-3 flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-2 shadow-[0_0_8px_rgba(124,58,237,0.5)]"></span>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.home')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.aboutUs')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.ministries')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.events')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.services')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.gallery')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center py-1.5 px-2.5 rounded-lg hover:bg-gray-800/30">
                  <span className="w-1.5 h-1.5 bg-primary-500/60 rounded-full mr-2.5 group-hover:bg-primary-500 group-hover:shadow-[0_0_6px_rgba(124,58,237,0.8)] transition-all duration-300"></span>
                  <span className="flex-1">{t('nav.contact')}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-3 flex items-center">
              <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-2 shadow-[0_0_8px_rgba(124,58,237,0.5)]"></span>
              {t('footer.contactInfo')}
            </h4>
            <ul className="grid md:grid-cols-2 lg:grid-cols-1 gap-2">
              <li className="group">
                <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 hover:from-gray-800/50 hover:to-gray-900/50 border border-gray-700/40 hover:border-primary-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600/30 to-primary-700/30 group-hover:from-primary-600 group-hover:to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.5)]">
                    <MapPin className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">{t('contact.address')}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">IPC Hebron, Basthi,<br />Neria Post, Belthangady TQ<br />D.K, Karnataka, India</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 hover:from-gray-800/50 hover:to-gray-900/50 border border-gray-700/40 hover:border-primary-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600/30 to-primary-700/30 group-hover:from-primary-600 group-hover:to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.5)]">
                    <Phone className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">{t('contact.phone')}</p>
                    <a href="tel:8075029739" className="text-gray-400 hover:text-primary-400 transition-colors inline-block text-sm font-medium hover:underline">
                      8075029739
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 hover:from-gray-800/50 hover:to-gray-900/50 border border-gray-700/40 hover:border-primary-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-600/30 to-primary-700/30 group-hover:from-primary-600 group-hover:to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.5)]">
                    <Mail className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">{t('contact.email')}</p>
                    <a href="mailto:ipchebronneria@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors break-all text-sm hover:underline">
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
      <div className="border-t border-gray-700/30 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm">
        <div className="container-custom py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-400">
              © {currentYear} IPC Hebron, Neria. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
