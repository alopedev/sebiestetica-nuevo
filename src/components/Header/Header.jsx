import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo pequeño en extremo izquierdo */}
        <Link to="/" className="site-logo">
          <h3>Sebiestetica</h3>
        </Link>

        {/* Menú de navegación en extremo derecho */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <Link to="/tratamientos" className={location.pathname.includes('/tratamientos') ? 'active' : ''}>
                TRATAMIENTOS
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi" className={location.pathname === '/sobre-mi' ? 'active' : ''}>
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link to="/donde-estamos" className={location.pathname === '/donde-estamos' ? 'active' : ''}>
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
