import { useRef } from 'react'
import { LuQuote, LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import testimonials from '../../data/testimonials'
import './Testimonials.css'

const Testimonials = () => {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const card = carouselRef.current.querySelector('.testimonial-slide')
    if (!card) return
    const scrollAmount = card.offsetWidth + 16
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <ScrollAnimation animation="slide-up">
          <div className="testimonials-title">
            <h2>Lo que dicen nuestros clientes</h2>
            <p>Descubre las experiencias de clientes que han confiado en nuestros servicios</p>
          </div>
        </ScrollAnimation>

        <div className="testimonials-carousel-wrapper">
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={() => scroll('prev')}
            aria-label="Testimonio anterior"
          >
            <LuChevronLeft />
          </button>

          <div className="testimonials-carousel" ref={carouselRef}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <ScrollAnimation
                  animation="fade-in"
                  delay={(index % 3) * 100}
                  className="testimonial-card">
                  <div className="quote-icon">
                    <LuQuote />
                  </div>
                  <div className="testimonial-header">
                    <div className="testimonial-stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} aria-hidden="true">★</span>
                      ))}
                    </div>
                    <div className="testimonial-time">
                      {testimonial.time}
                    </div>
                  </div>

                  <p className="testimonial-content">{testimonial.text}</p>

                  <div className="testimonial-footer">
                    <div
                      className="testimonial-avatar avatar-letter"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    >
                      {testimonial.avatarInitial}
                    </div>
                    <div className="testimonial-name-container">
                      {testimonial.name}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={() => scroll('next')}
            aria-label="Siguiente testimonio"
          >
            <LuChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
