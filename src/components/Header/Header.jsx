import { Link, useLocation, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import logoImage from '../../assets/images/sebiestetica_Logo.webp'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef(null)
  const menuBtnRef = useRef(null)

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          menuBtnRef.current &&
          !menuBtnRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Detectar scroll para aplicar sombra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detectar si es dispositivo móvil para mostrar/ocultar elementos
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificar inicialmente
    checkIfMobile();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Abrir WhatsApp con mensaje predefinido
  const openWhatsApp = () => {
    const win = window.open(
      'https://wa.me/+34677412424?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Sebiestetica',
      '_blank',
      'noopener,noreferrer'
    )
    if (win) win.opener = null
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo pequeño en extremo izquierdo */}
        <Link to="/" className="site-logo">
          <img src={logoImage} alt="Sebiestetica" className="site-logo-img" />
        </Link>

        {/* Elementos exclusivos para móvil */}
        <div className="mobile-menu-container">
          {/* Botón WhatsApp fijo - Solo para móvil */}
          <button
            className="header-cta"
            onClick={openWhatsApp}
            aria-label="Contactar por WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
          </button>

          {/* Botón de menú hamburguesa */}
          <button
            className="mobile-menu-btn"
            ref={menuBtnRef}
            onClick={toggleMenu}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-icon">
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            </span>
          </button>
        </div>

        {/* Overlay para cerrar el menú al hacer clic fuera */}
        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

        {/* Menú de navegación en extremo derecho */}
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <div className="nav-content">
            <ul className="nav-links">
              <li className="mobile-nav-item">
                <NavLink to="/tratamientos" className={({ isActive }) => isActive ? 'active' : ''}>
                  TRATAMIENTOS
                </NavLink>
              </li>
              <li className="mobile-nav-item">
                <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : ''}>
                  SOBRE MÍ
                </NavLink>
              </li>
              <li className="mobile-nav-item">
                <NavLink to="/donde-estamos" className={({ isActive }) => isActive ? 'active' : ''}>
                  CONTACTO
                </NavLink>
              </li>

              {/* Enlaces desktop - sin iconos */}
              <li className="desktop-nav-item">
                <NavLink to="/tratamientos" className={({ isActive }) => isActive ? 'active' : ''}>
                  TRATAMIENTOS
                </NavLink>
              </li>
              <li className="desktop-nav-item">
                <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'active' : ''}>
                  SOBRE MÍ
                </NavLink>
              </li>
              <li className="desktop-nav-item">
                <NavLink to="/donde-estamos" className={({ isActive }) => isActive ? 'active' : ''}>
                  CONTACTO
                </NavLink>
              </li>
            </ul>

            {/* CTA de WhatsApp en el menú - Solo en móvil */}
            {isMobile && (
              <a
                href="https://wa.me/+34677412424?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Sebiestetica"
                className="menu-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            )}

            {/* Iconos de redes sociales - Solo en móvil */}
            {isMobile && (
              <div className="menu-social">
                <a href="https://www.instagram.com/explore/locations/1035209578/sebi-estetica/?locale=es_ES/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#2f2f2f">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/SebiEstetica/?locale=es_ES" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#2f2f2f">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
