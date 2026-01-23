import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample gallery images - in production, these would come from an API or CMS
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Church service',
      category: 'services',
      title: 'Sunday Worship Service'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Prayer meeting',
      category: 'prayer',
      title: 'Prayer Meeting'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      alt: 'Bible study',
      category: 'events',
      title: 'Bible Study Session'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      alt: 'Youth group',
      category: 'youth',
      title: 'Youth Conference'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      alt: 'Community outreach',
      category: 'outreach',
      title: 'Community Outreach'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Worship team',
      category: 'services',
      title: 'Worship Team'
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
  ]

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'services', label: 'Services' },
    { id: 'events', label: 'Events' },
    { id: 'youth', label: 'Youth' },
    { id: 'prayer', label: 'Prayer' },
    { id: 'outreach', label: 'Outreach' }
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
      {/* Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No images found in this category.</p>
            </div>
          )}

          {/* Note about replacing images */}
          <div className="mt-8 bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> These are sample placeholder images from Unsplash. 
              To replace them with your actual church photos:
            </p>
            <ol className="list-decimal list-inside mt-2 text-sm text-gray-700 space-y-1">
              <li>Upload your photos to a hosting service (e.g., Cloudinary, Imgur, or your own server)</li>
              <li>Update the <code className="bg-gray-200 px-1 rounded">galleryImages</code> array in <code className="bg-gray-200 px-1 rounded">src/pages/Gallery.jsx</code></li>
              <li>Replace the <code className="bg-gray-200 px-1 rounded">src</code> URLs with your image URLs</li>
              <li>Update <code className="bg-gray-200 px-1 rounded">alt</code> and <code className="bg-gray-200 px-1 rounded">title</code> with appropriate descriptions</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <p className="text-xl font-semibold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
