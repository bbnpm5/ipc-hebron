import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-2xl shadow-glow-lg transition-all duration-300 hover:scale-110 hover:shadow-glow-xl active:scale-95 flex items-center justify-center group animate-fade-in animate-scale-in min-h-[44px] min-w-[44px]"
          aria-label="Scroll to top"
          title="Scroll to top"
          onTouchStart={(e) => e.stopPropagation()}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/30 rounded-2xl blur-xl transition-all duration-300"></div>
          {/* Icon */}
          <ArrowUp className="w-7 h-7 text-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" strokeWidth={3} />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
