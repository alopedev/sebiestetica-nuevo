import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LuQuote } from 'react-icons/lu'

const Testimonials = () => {
  // Testimonios reales de clientes
  const testimonials = [
    {
      id: 1,
      name: "Helena Gil Castillo",
      role: "7 reseñas",
      time: "Hace un año",
      text: "Soy clienta habitual y no puedo estar más contenta con el servicio que da Sebi. Profesional y cercana. Siempre quiero volver.",
      rating: 5
    },
    {
      id: 2,
      name: "Esther Gispert",
      role: "5 reseñas · 23 fotos",
      time: "Hace un año",
      text: "Excelente profesional. Tratamientos de belleza con resultados fabulosos. Trato cercano y cariñoso, te hace sentir como en casa. Recomiento 100X100. Gracias Sebi.",
      rating: 5
    },
    {
      id: 3,
      name: "Sheila Díez Cano",
      role: "9 reseñas",
      time: "Hace 11 meses",
      text: "Mi chico y yo llevamos años haciéndonos las cejas con sebi y nunca he tenido de mejores. Se lo recomiendo a todo el mundo. No podría vivir sin ella, te cambia la cara.",
      rating: 5
    },
    {
      id: 4,
      name: "Lorena Navarro",
      role: "10 reseñas",
      time: "Hace 3 meses",
      text: "Es la primera vez que vengo y sin duda no será la última. Trato genial, simpática y sincera. Me ha transmitido confianza y profesionalidad. Sin duda volveré!!!!!!",
      rating: 5
    },
    {
      id: 6,
      name: "Aina Gomez",
      role: "7 reseñas",
      time: "Hace 3 meses",
      text: "Increíble como siempre, trato excepcional. Super cómoda en todo momento y resultado inmejorable, siempre será mi clínica de confianza.",
      rating: 5
    }
  ];

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Descubre las experiencias de clientes que han confiado en nuestros servicios</p>
        </div>
        
        <div className="testimonials-carousel">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="quote-icon">
                    <LuQuote />
                  </div>
                  <div className="testimonial-header">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <div className="testimonial-time">
                      {testimonial.time}
                    </div>
                  </div>
                  
                  <p className="testimonial-content">{testimonial.text}</p>
                  
                  {/* Nueva estructura simplificada para el autor */}
                  <div className="testimonial-footer">
                    {/* Avatares personalizados con colores de marca */}
                    {testimonial.id === 2 ? (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#be9b7b'}}>E</div>
                    ) : testimonial.id === 5 ? (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#d4af37'}}>E</div>
                    ) : testimonial.id === 4 ? (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#e9cea5'}}>L</div>
                    ) : testimonial.id === 6 ? (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#be9b7b'}}>A</div>
                    ) : testimonial.id === 3 ? (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#d4af37'}}>SC</div>
                    ) : (
                      <div className="testimonial-avatar avatar-letter" style={{backgroundColor: '#e9cea5'}}>H</div>
                    )}
                    
                    {/* Nombre recortado si es necesario */}
                    <div className="testimonial-name-container">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
