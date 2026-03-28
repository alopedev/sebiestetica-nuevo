import { useState, useEffect } from 'react'
import './PageTransition.css'

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger enter animation on mount
    const frame = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={`page-transition ${isVisible ? 'page-enter-active' : 'page-enter'}`}>
      {children}
    </div>
  )
}

export default PageTransition
