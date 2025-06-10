import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Sebiestetica</p>
          </div>

          <div className="footer-social">
            <a href="https://www.facebook.com/SebiEstetica/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/explore/locations/1035209578/sebi-estetica/?locale=es_ES/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:+34977333869" aria-label="Teléfono">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
