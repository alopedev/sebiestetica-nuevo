import { FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa'
import { PHONE, SOCIAL } from '../../data/siteConfig'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Sebiestetica</p>
          </div>

          <div className="footer-social">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={PHONE.landlineTel} aria-label="Teléfono">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
