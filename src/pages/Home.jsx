import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DailyVerse from '../components/DailyVerse'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Sample hero images - replace with actual church photos
  const heroImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop',
      alt: 'Church congregation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      alt: 'Worship service'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
      alt: 'Bible study'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div>
      {/* Hero Image Section with Carousel */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        {/* Hero Images */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Daily Verse Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <DailyVerse />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to IPC Hebron</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to glorify God by proclaiming the Gospel of Jesus Christ, 
              being led by the Holy Spirit, making disciples, and demonstrating God's love 
              through worship, word, and works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary inline-flex items-center justify-center">
                Service Times
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Quick View */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Service Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sunday Service</h3>
              <p className="text-gray-700">10:00 AM - 12:30 PM</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold mb-2">Wednesday</h3>
              <p className="text-gray-700">Cottage Meeting</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold mb-2">Friday</h3>
              <p className="text-gray-700">Fasting Prayer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/sermons" className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Sermons</h3>
              <p className="text-gray-600 text-sm">Listen to our latest messages</p>
            </Link>
            <Link to="/events" className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <p className="text-gray-600 text-sm">Upcoming church events</p>
            </Link>
            <Link to="/prayer-request" className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Prayer</h3>
              <p className="text-gray-600 text-sm">Submit a prayer request</p>
            </Link>
            <Link to="/gallery" className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Gallery</h3>
              <p className="text-gray-600 text-sm">View our photo gallery</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
