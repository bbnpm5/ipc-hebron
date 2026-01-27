import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Sermons from './pages/Sermons'
import Events from './pages/Events'
import PrayerRequest from './pages/PrayerRequest'
import Giving from './pages/Giving'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Ministries from './pages/Ministries'
import StatementOfFaith from './pages/StatementOfFaith'
import OurStory from './pages/OurStory'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/statement-of-faith" element={<StatementOfFaith />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
