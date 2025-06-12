import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo pequeño en extremo izquierdo */}
        <Link to="/" className="site-logo">
          <h3 className="site-title">Sebiestetica</h3>
        </Link>

        {/* Botón de menú hamburguesa para móvil */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menú de navegación">
          <span className="hamburger-icon">
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
          </span>
        </button>

        {/* Menú de navegación en extremo derecho */}
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/tratamientos" 
                className={location.pathname.includes('/tratamientos') ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                TRATAMIENTOS
              </Link>
            </li>
            <li>
              <Link 
                to="/sobre-mi" 
                className={location.pathname === '/sobre-mi' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link 
                to="/donde-estamos" 
                className={location.pathname === '/donde-estamos' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
