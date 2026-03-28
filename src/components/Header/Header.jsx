import { Link, useLocation, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../../constants/links'
import logoImage from '../../assets/images/sebiestetica_Logo.webp'
import './Header.css'

const NAV_ITEMS = [
  { to: '/tratamientos', label: 'TRATAMIENTOS' },
  { to: '/sobre-mi', label: 'SOBRE MÍ' },
  { to: '/donde-estamos', label: 'CONTACTO' },
]

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef(null)
  const menuBtnRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) setMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally only reacts to route changes
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen &&
          menuRef.current && !menuRef.current.contains(event.target) &&
          menuBtnRef.current && !menuBtnRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="site-logo">
          <img src={logoImage} alt="Sebiestetica" className="site-logo-img" />
        </Link>

        <div className="mobile-menu-container">
          <a
            className="header-cta"
            href={WHATSAPP_URL}
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
          >
            <span className="hamburger-icon">
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
            </span>
          </button>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <div className="nav-content">
            <ul className="nav-links">
              {['mobile', 'desktop'].map(variant =>
                NAV_ITEMS.map(({ to, label }) => (
                  <li className={`${variant}-nav-item`} key={`${variant}-${to}`}>
                    <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                      {label}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>

            {isMobile && (
              <>
                <a href={WHATSAPP_URL} className="menu-cta" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
                <div className="menu-social">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={18} />
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF size={18} />
                  </a>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
