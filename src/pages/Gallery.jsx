import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Gallery images - Add your photos here!
  // To add photos:
  // 1. Place your image files in the 'public' folder (e.g., public/gallery/photo1.jpg)
  // 2. Add an entry below with: id, src (path from public folder), alt text, category, and title
  const galleryImages = [
    // Example: Photo from public folder
    // {
    //   id: 1,
    //   src: '/gallery/church-congregation.jpg',
    //   alt: 'IPC Hebron Church Congregation',
    //   category: 'services',
    //   title: 'Sunday Worship Service'
    // },
    
    // Add your church photos here following this format:
    {
      id: 1,
      src: '/gallery/photo1.jpg',  // Change this to your photo path
      alt: 'Church service',
      category: 'services',
      title: 'Sunday Worship Service'
    },
    {
      id: 2,
      src: '/gallery/photo2.jpg',  // Change this to your photo path
      alt: 'Prayer meeting',
      category: 'prayer',
      title: 'Prayer Meeting'
    },
    {
      id: 3,
      src: '/gallery/photo3.jpg',  // Change this to your photo path
      alt: 'Youth event',
      category: 'youth',
      title: 'Youth Conference'
    },
    {
      id: 4,
      src: '/gallery/photo4.jpg',  // Change this to your photo path
      alt: 'Church event',
      category: 'events',
      title: 'Special Event'
    },
    {
      id: 5,
      src: '/gallery/photo5.jpg',  // Change this to your photo path
      alt: 'Community outreach',
      category: 'outreach',
      title: 'Community Outreach'
    },
    {
      id: 6,
      src: '/gallery/photo6.jpg',  // Change this to your photo path
      alt: 'Worship team',
      category: 'services',
      title: 'Worship Team'
    },
    {
      id: 13,
      src: '/gallery/ChurchBuildingDedication1.jpg',
      alt: 'Church Building Dedication Service at IPC Hebron',
      category: 'events',
      title: 'Church Building Dedication - Photo 1'
    },
    {
      id: 14,
      src: '/gallery/ChurchBuildingDedication2.jpg',
      alt: 'Church Building Dedication Service at IPC Hebron',
      category: 'events',
      title: 'Church Building Dedication - Photo 2'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Fellowship',
      category: 'events',
      title: 'Fellowship Gathering'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      alt: 'Children ministry',
      category: 'youth',
      title: 'Children\'s Ministry'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      alt: 'Baptism',
      category: 'events',
      title: 'Baptism Service'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Prayer circle',
      category: 'prayer',
      title: 'Prayer Circle'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Sunday school',
      category: 'youth',
      title: 'Sunday School'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      alt: 'Church building',
      category: 'services',
      title: 'Our Church Building'
    }
    
    // Add more photos by copying the format above and incrementing the id
  ]

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
      {/* Enhanced Page Banner with UI/UX Pro Max */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 text-white py-20 md:py-28 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='gallery-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='80' cy='40' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='40' cy='60' r='2' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='70' cy='80' r='2' fill='%23ffffff' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23gallery-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-900/85"></div>
        
        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-large">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-4 animate-slide-up">
            {t('pageTitles.gallery')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-100 drop-shadow-lg max-w-3xl mx-auto animate-fade-in">
            {t('gallery.subtitle')}
          </p>
          {/* Image Count Badge */}
          <div className="mt-6 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-scale-in">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">{filteredImages.length} {t('gallery.allPhotos', 'Photos')}</span>
          </div>
        </div>
      </section>

      {/* Gallery Section with UI/UX Pro Max */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-glow-lg'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-600 shadow-medium hover:shadow-large border-2 border-transparent hover:border-primary-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.label}
                {selectedCategory === category.id && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Image Grid with Masonry Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-medium hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-sm md:text-base drop-shadow-lg">{image.title}</p>
                    <p className="text-white/80 text-xs mt-1">{image.category}</p>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                    <span className="text-white text-xs font-semibold uppercase tracking-wide">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg font-semibold">No images found in this category.</p>
              <p className="text-gray-500 text-sm mt-2">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal with UI/UX Pro Max */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-glow border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
          
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 sm:left-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-glow border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          
          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 sm:right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-glow border border-white/20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-7xl max-h-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Image Info Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 rounded-b-2xl">
                <div className="text-white text-center">
                  <p className="text-xl md:text-2xl font-bold mb-2">{selectedImage.title}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full uppercase tracking-wide">
                      {selectedImage.category}
                    </span>
                    <span className="text-white/70">
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
