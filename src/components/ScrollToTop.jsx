import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Jump to the top instantly when the page changes. A smooth (animated)
    // scroll here could fight a visitor who starts scrolling straight away,
    // making the page go down and then get pulled back up.
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
