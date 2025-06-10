import React from 'react';
import { LuPhone, LuClock, LuFacebook, LuInstagram } from 'react-icons/lu';
import './Contact.css';

const Contact = () => {
  const scheduleData = [
    { day: 'Lunes', hours: '16:00-20:00' },
    { day: 'Martes', hours: '10:00-13:00, 16:00-20:00' },
    { day: 'Miércoles', hours: '10:00-13:00, 16:00-20:00' },
    { day: 'Jueves', hours: '10:00-13:00, 16:00-20:00' },
    { day: 'Viernes', hours: '10:00-13:00, 16:00-20:00' },
    { day: 'Sábado', hours: '10:00-14:00' },
    { day: 'Domingo', hours: 'Cerrado' }
  ];

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <h2 className="contact-title">Dónde Encontrarnos</h2>
        
        <div className="contact-content">
          <div className="map-wrapper">
            <div className="map-container">
              <div className="map-overlay"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.354625687521!2d1.1065698!3d41.1556536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15a0390220c69%3A0x4c1a6449d2ac6d99!2sC.%20de%20Xavier%20Gamb%C3%BAs%2C%201%2C%2043202%20Reus%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1654585685940!5m2!1ses!2ses" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Sebiestetica"
                className="google-map"
              ></iframe>
              <div className="map-address">
                <p>Carrer de Xavier Gambús, 1, 43202 Reus, Tarragona</p>
              </div>
            </div>
          </div>

          <div className="cards-container">
            <div className="contact-info-card phone-card">
              <div className="info-icon">
                <LuPhone />
              </div>
              <h3>Contacto</h3>
              <div className="info-content">
                <p><a href="tel:+34977333869" className="phone-link">977 33 38 69</a></p>
                <p className="call-time">Atención telefónica en horario comercial</p>
                
                <div className="social-links">
                  <a href="https://www.facebook.com/SebiEstetica/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <LuFacebook /> Facebook
                  </a>
                  <a href="https://www.instagram.com/explore/locations/1035209578/sebi-estetica/?locale=es_ES/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <LuInstagram /> Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card schedule-card">
              <div className="info-icon">
                <LuClock />
              </div>
              <h3>Horario</h3>
              <div className="info-content">
                <div className="schedule-container">
                  {scheduleData.map((item, index) => (
                    <div className="schedule-row" key={index}>
                      <span className="schedule-day">{item.day}:</span>
                      <span className="schedule-hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
