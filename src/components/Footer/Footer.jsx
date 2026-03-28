import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE_URL } from '../../constants/links'
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
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={PHONE_URL} aria-label="Teléfono">
              <LuPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
