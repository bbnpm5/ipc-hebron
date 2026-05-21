import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const { t, i18n } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isKannada = i18n.language?.startsWith('kn')

  const testimonials = [
    {
      id: 1,
      name: isKannada ? 'ಎಂ ಜೆ ಜಾಕೋಬ್' : 'M J Jacob',
      text: isKannada
        ? 'ಯೇಸುವಿನ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತವಾದ ಚರ್ಚ್ ಕುಟುಂಬದ ಭಾಗವಾಗಿ ದೇವರು ನನ್ನ ಜೀವನವನ್ನು ಪರಿವರ್ತಿಸಿದ್ದಾನೆ, ಮತ್ತು ಇಲ್ಲಿ ಕೇಳ್ಪಡುವ ಸಂದೇಶವು ನನ್ನನ್ನು ಆತ್ಮಿಕವಾಗಿ ಆಶಿರ್ವಾದಿಸುತಿದೆ. ಈ ಸಭೆಯಲ್ಲಿರಿವುದಕ್ಕೆ ಕೃತಜ್ಞನಾಗಿದ್ದೇನೆ. ದೇವರಿಗೆ ಮಹಿಮೆ!'
        : 'Blessed to be part of a church family focused on Jesus. God has transformed my life, and every message here builds me up. Grateful to be here. Praise God!'
    },
    {
      id: 2,
      name: isKannada ? 'ಸಿಬಿನ್ ಪಿ ಎಂ' : 'Sibin P.M',
      text: isKannada
        ? 'ಐಪಿಸಿ ಹೆಬ್ರಾನ್ ದೇವರ ಸಭೆಯು ನನ್ನ ಜೀವನದಲ್ಲಿ ಒಂದು ಆಶೀರ್ವಾದವಾಗಿದೆ. ಆರಾಧನೆ ಶಕ್ತಿಯುತವಾಗಿವೆ ಮತ್ತು ದೇವರ ವಾಕ್ಯದ ಬೋಧನೆಯು ನನಗೆ ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡಿದೆ. ಈ ಚರ್ಚ್ ಕುಟುಂಬಕ್ಕಾಗಿ ನಾನು ಕೃತಜ್ಞನಾಗಿದ್ದೇನೆ.'
        : 'IPC Hebron has been a blessing in my life. The worship services are powerful, and the teaching of God\'s word has helped me grow spiritually. I\'m grateful for this church family.'
    },
    {
      id: 3,
      name: isKannada ? 'ಸಾಲು ಜೋಸೆಫ್' : 'Salu Joseph',
      text: isKannada
        ? 'ನಾನು ಇಲ್ಲಿ ಅನುಭವಿಸಿದ ಪ್ರೀತಿ ಮತ್ತು ಸಹಭಾಗಿತ್ವ ಅದ್ಭುತವಾಗಿದೆ. ಚರ್ಚ್ ಸಮುದಾಯದ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ಬೆಂಬಲ ನನ್ನ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿವೆ. ಧನ್ಯವಾದಗಳು, ಐಪಿಸಿ ಹೆಬ್ರಾನ್!'
        : 'The love and fellowship I\'ve experienced here is amazing. The prayers and support from the church community have been instrumental in my spiritual journey. Thank you, IPC Hebron!'
    },
    {
      id: 4,
      name: isKannada ? 'ಸುಜಾ ಟಾಮಿ' : 'Suja Tomy',
      text: isKannada
        ? 'ಐಪಿಸಿ ಹೆಬ್ರಾನ್ ನ ಭಾಗವಾಗಿರುವುದರಿಂದ ದೇವರೊಂದಿಗಿನ ನನ್ನ ಸಂಬಂಧವು ರೂಪಾಂತರಗೊಂಡಿದೆ. ಪವಿತ್ರಾತ್ಮವು ಇಲ್ಲಿ ಶಕ್ತಿಯುತವಾಗಿ ಚಲಿಸುತ್ತದೆ ಮತ್ತು ನನ್ನ ಜೀವನದ ಪ್ರತಿಯೊಂದು ಕ್ಷೇತ್ರದಲ್ಲೂ ದೇವರ ನಂಬಿಗಸ್ತಿಕೆಯನ್ನು ನಾನು ನೋಡಿದ್ದೇನೆ.'
        : 'Being part of IPC Hebron has transformed my relationship with God. The Holy Spirit moves powerfully here, and I\'ve seen God\'s faithfulness in every area of my life.'
    },
    {
      id: 5,
      name: isKannada ? 'ಕೆ ರಾಜು' : 'K Raju',
      text: isKannada
        ? 'ಈ ಚರ್ಚ್ ನಿಜವಾಗಿಯೂ ದೇವರ ಸಾನಿಧ್ಯವನ್ನು ಅನುಭವಿಸುವ ಸ್ಥಳವಾಗಿದೆ. ಸೇವೆ, ಆರಾಧನೆ ಮತ್ತು ಫೆಲೋಶಿಪ್ ಜೀವನವನ್ನು ಬದಲಾಯಿಸುತ್ತಿದೆ. ಐಪಿಸಿ ಹೆಬ್ರಾನ್ ಅನ್ನು ನನ್ನ ಮನೆ ಚರ್ಚ್ ಎಂದು ಕರೆಯಲು ನಾನು ಧನ್ಯನಾಗಿದ್ದೇನೆ.'
        : 'This church is truly a place where God\'s presence is felt. The ministry, worship, and fellowship have been life-changing. I\'m blessed to call IPC Hebron my home church.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container-custom max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title text-gradient mb-4">
            {t('testimonials.title', 'Testimonials')}
          </h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle', 'Hear from our church family about how God is working in their lives')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="card-gradient p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon Background */}
            <div className="absolute top-4 right-4 w-24 h-24 text-primary-100 opacity-20">
              <Quote className="w-full h-full" strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <div className="inline-block mb-6">
                  <Quote className="w-12 h-12 text-primary-500" strokeWidth={1.5} />
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic max-w-4xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>

              {/* Separator */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-6"></div>

              {/* Author Name */}
              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white hover:bg-primary-600 text-primary-600 hover:text-white rounded-full shadow-large flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white hover:bg-primary-600 text-primary-600 hover:text-white rounded-full shadow-large flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded ${
                index === currentIndex
                  ? 'w-10 h-2 bg-gradient-to-r from-primary-500 to-primary-700 shadow-medium'
                  : 'w-2 h-2 bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
