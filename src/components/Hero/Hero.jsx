import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/entry.webp'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Logo grande centrado */}
        <div className="main-logo">
          <h1 className="logo-text">Sebiestetica</h1>
        </div>
        
        {/* Imagen principal con sello promocional */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={heroImage} alt="Sebiestetica" className="hero-image" />
          </div>
          
          {/* Sello promocional eliminado */}
        </div>
        
        {/* Sección de título y descripción */}
        <div className="identity-section">
          <h2 className="identity-title">Tu espacio de belleza y bienestar en Reus</h2>
          <p className="identity-description">Descubre una experiencia única de cuidado personal donde la belleza se encuentra con la relajación. Nuestros tratamientos profesionales están diseñados para realzar tu belleza natural.</p>
          <Link to="/tratamientos" className="link-button">Ver tratamientos</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
