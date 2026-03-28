import { Link, useLocation, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { PHONE, SOCIAL } from '../../data/siteConfig'
import logoImage from '../../assets/images/sebiestetica_Logo.webp'
import './Header.css'

const navLinkClass = ({ isActive }) => isActive ? 'active' : ''

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const menuBtnRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleClickOutside = (event) => {
      if (menuRef.current &&
          !menuRef.current.contains(event.target) &&
          menuBtnRef.current &&
          !menuBtnRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(prev => {
        const next = window.scrollY > 10
        return prev === next ? prev : next
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#main" className="skip-to-content">Saltar al contenido</a>
      <div className="header-inner">
        <Link to="/" className="site-logo">
          <img src={logoImage} alt="Sebiestetica" className="site-logo-img" />
        </Link>

        <div className="mobile-menu-container">
          <a
            href={PHONE.whatsappUrl}
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp size={16} color="white" />
          </a>

          <button
            className="mobile-menu-btn"
            ref={menuBtnRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span className="hamburger-icon">
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            </span>
          </button>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

        <nav id="main-nav" className={`main-nav ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <div className="nav-content">
            <ul className="nav-links">
              <li><NavLink to="/tratamientos" className={navLinkClass}>TRATAMIENTOS</NavLink></li>
              <li><NavLink to="/sobre-mi" className={navLinkClass}>SOBRE MÍ</NavLink></li>
              <li><NavLink to="/donde-estamos" className={navLinkClass}>CONTACTO</NavLink></li>
            </ul>

            <a href={PHONE.whatsappUrl} className="menu-cta" target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </a>

            <div className="menu-social">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
