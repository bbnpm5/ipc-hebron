import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, Grid3x3, Filter, ZoomIn, Heart, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  // Gallery images - Add your photos here!
  const galleryImages = [
    {
      id: 13,
      src: '/gallery/ChurchBuildingDedication1.jpg',
      alt: 'Church Building Dedication Service at IPC Hebron',
      category: 'events',
      title: 'Church Building Dedication',
      description: 'A memorable day in our church history',
      size: 'large' // large, medium, small for masonry layout
    },
    {
      id: 14,
      src: '/gallery/ChurchBuildingDedication2.jpg',
      alt: 'Church Building Dedication Service at IPC Hebron',
      category: 'events',
      title: 'Dedication Ceremony',
      description: 'Celebrating God\'s faithfulness',
      size: 'medium'
    },
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1200&fit=crop',
      alt: 'Church service',
      category: 'services',
      title: 'Sunday Worship Service',
      description: 'Praising God together',
      size: 'large'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Prayer meeting',
      category: 'prayer',
      title: 'Prayer Meeting',
      description: 'Seeking God\'s face',
      size: 'medium'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=800&fit=crop',
      alt: 'Youth event',
      category: 'youth',
      title: 'Youth Conference',
      description: 'Empowering the next generation',
      size: 'small'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      alt: 'Church event',
      category: 'events',
      title: 'Special Event',
      description: 'Fellowship and celebration',
      size: 'medium'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop',
      alt: 'Community outreach',
      category: 'outreach',
      title: 'Community Outreach',
      description: 'Serving our community',
      size: 'large'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop',
      alt: 'Worship team',
      category: 'services',
      title: 'Worship Team',
      description: 'Leading in praise',
      size: 'small'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Fellowship',
      category: 'events',
      title: 'Fellowship Gathering',
      description: 'Building relationships',
      size: 'medium'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=900&fit=crop',
      alt: 'Children ministry',
      category: 'youth',
      title: 'Children\'s Ministry',
      description: 'Nurturing young hearts',
      size: 'large'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=700&fit=crop',
      alt: 'Baptism',
      category: 'events',
      title: 'Baptism Service',
      description: 'New life in Christ',
      size: 'small'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Prayer circle',
      category: 'prayer',
      title: 'Prayer Circle',
      description: 'United in prayer',
      size: 'medium'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=800&fit=crop',
      alt: 'Sunday school',
      category: 'youth',
      title: 'Sunday School',
      description: 'Learning God\'s Word',
      size: 'medium'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      alt: 'Church building',
      category: 'services',
      title: 'Our Church Building',
      description: 'A place of worship',
      size: 'large'
    }
  ]

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  const categories = [
    { id: 'all', label: t('gallery.allPhotos') },
    { id: 'services', label: t('gallery.services') },
    { id: 'events', label: t('gallery.events') },
    { id: 'youth', label: t('gallery.youth') },
    { id: 'prayer', label: t('gallery.prayer') },
    { id: 'outreach', label: t('gallery.outreach') }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div>
      {/* Page Banner - Matching About Page Style */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8 md:py-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='cross' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M50 20 L50 80 M20 50 L80 50' stroke='white' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23cross)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl">
            {t('pageTitles.gallery')}
          </h1>
          <p className="mt-3 text-base md:text-lg text-primary-100 drop-shadow-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Modern Gallery Section with Celebration Vibe */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Celebration Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cpath d='M40 10 L45 25 L60 25 L48 35 L53 50 L40 40 L27 50 L32 35 L20 25 L35 25 Z' fill='%23000000' opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Modern Category Filters with Celebration Colors */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
            {categories.map((category, index) => {
              const categoryStyles = {
                all: { gradient: 'from-gray-700 to-gray-900', hoverGradient: 'from-gray-600 to-gray-800' },
                services: { gradient: 'from-primary-600 to-primary-700', hoverGradient: 'from-primary-500 to-primary-600' },
                events: { gradient: 'from-gold-500 to-gold-600', hoverGradient: 'from-gold-400 to-gold-500' },
                youth: { gradient: 'from-accent-600 to-accent-700', hoverGradient: 'from-accent-500 to-accent-600' },
                prayer: { gradient: 'from-primary-700 to-primary-800', hoverGradient: 'from-primary-600 to-primary-700' },
                outreach: { gradient: 'from-gold-600 to-gold-700', hoverGradient: 'from-gold-500 to-gold-600' }
              }
              const style = categoryStyles[category.id] || categoryStyles.all

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setIsLoading(true)
                  }}
                  className={`relative px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${style.gradient} text-white shadow-large scale-105`
                      : `bg-white text-gray-700 hover:bg-gradient-to-r hover:${style.hoverGradient} hover:text-white shadow-soft hover:shadow-medium border border-gray-200 hover:border-transparent`
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="relative z-10">{category.label}</span>
                  {selectedCategory === category.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} rounded-full blur opacity-50 animate-pulse`}></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Modern Grid Gallery Layout */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
                <Sparkles className="w-6 h-6 text-gold-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filteredImages.map((image, index) => {
                const categoryColors = {
                  services: 'from-primary-500 to-primary-700',
                  events: 'from-gold-500 to-gold-700',
                  youth: 'from-accent-500 to-accent-700',
                  prayer: 'from-primary-600 to-primary-800',
                  outreach: 'from-gold-600 to-gold-800'
                }
                const gradient = categoryColors[image.category] || 'from-primary-500 to-primary-700'

                return (
                  <div
                    key={image.id}
                    onClick={() => openLightbox(image)}
                    className="group relative cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Card */}
                    <div className="relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200">
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-medium`}>
                            {image.category}
                          </span>
                        </div>

                        {/* Zoom Icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium">
                            <ZoomIn className="w-5 h-5 text-gray-800" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-4 md:p-5">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {image.title}
                        </h3>

                        {/* Divider */}
                        <div className="relative h-0.5 w-12 bg-gray-200 rounded-full overflow-hidden mb-3">
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                        </div>

                        {image.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {image.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Accent Line */}
                      <div className={`h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>

                    {/* Celebration Sparkles on Hover */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="w-6 h-6 text-gold-500 animate-pulse" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto shadow-soft">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-gray-700 text-xl font-bold mb-2">{t('gallery.noImages', 'No images found')}</h3>
              <p className="text-gray-500 text-base">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modern Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-large group"
            aria-label="Close"
          >
            <X className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 sm:left-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-x-1 shadow-large group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 sm:right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:translate-x-1 shadow-large group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
          </button>

          {/* Image Container */}
          <div
            className="max-w-7xl max-h-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>

              {/* Image Info Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 md:p-6 rounded-b-2xl">
                <div className="text-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-white/80 text-sm md:text-base mb-3 max-w-2xl mx-auto">
                      {selectedImage.description}
                    </p>
                  )}
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full border border-white/20">
                      {selectedImage.category}
                    </span>
                    <span className="text-white/70 text-sm font-medium">
                      {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
