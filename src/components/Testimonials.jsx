import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.testimonial1.name', 'Srini Sham'),
      text: t('testimonials.testimonial1.text', 'Really blessed to be part of the church family where focus is on Jesus. God has anointed and transformed my life. The word of God shared here enriches me. Glad to be here. Praise God.')
    },
    {
      id: 2,
      name: t('testimonials.testimonial2.name', 'Sarah Johnson'),
      text: t('testimonials.testimonial2.text', 'IPC Hebron has been a blessing in my life. The worship services are powerful, and the teaching of God\'s word has helped me grow spiritually. I\'m grateful for this church family.')
    },
    {
      id: 3,
      name: t('testimonials.testimonial3.name', 'David Kumar'),
      text: t('testimonials.testimonial3.text', 'The love and fellowship I\'ve experienced here is amazing. The prayers and support from the church community have been instrumental in my spiritual journey. Thank you, IPC Hebron!')
    },
    {
      id: 4,
      name: t('testimonials.testimonial4.name', 'Priya Menon'),
      text: t('testimonials.testimonial4.text', 'Being part of IPC Hebron has transformed my relationship with God. The Holy Spirit moves powerfully here, and I\'ve seen God\'s faithfulness in every area of my life.')
    },
    {
      id: 5,
      name: t('testimonials.testimonial5.name', 'Michael Thomas'),
      text: t('testimonials.testimonial5.text', 'This church is truly a place where God\'s presence is felt. The ministry, worship, and fellowship have been life-changing. I\'m blessed to call IPC Hebron my home church.')
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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container-custom max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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
