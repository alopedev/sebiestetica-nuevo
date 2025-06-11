import React, { useState, useEffect } from 'react';
import { LuPhone, LuClock, LuLock, LuMapPin } from 'react-icons/lu';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactData = {
    address: {
      icon: <LuMapPin />,
      title: 'Ubicación',
      description: 'Carrer de Xavier Gambús, 1, 43202 Reus, Tarragona'
    },
    schedule: {
      icon: <LuClock />,
      title: 'Horario',
      data: [
        { day: 'Lunes', hours: '16:00-20:00' },
        { day: 'Martes', hours: '10:00-13:00, 16:00-20:00' },
        { day: 'Miércoles', hours: '10:00-13:00, 16:00-20:00' },
        { day: 'Jueves', hours: '10:00-13:00, 16:00-20:00' },
        { day: 'Viernes', hours: '10:00-13:00, 16:00-20:00' },
        { day: 'Sábado', hours: '10:00-14:00' },
        { day: 'Domingo', hours: 'Cerrado', closed: true }
      ]
    },
    phone: {
      icon: <LuPhone />,
      title: 'Contacto',
      phone: '977 33 38 69',
      note: 'Atención telefónica en horario comercial'
    }
  };

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
            </div>
          </div>

          <div className="features-container contact-features">
            {/* Tarjeta de ubicación */}
            <div className="feature-item contact-feature">
              <div className="feature-icon-vertical">
                {contactData.address.icon}
              </div>
              <h3 className="feature-title">{contactData.address.title}</h3>
              <p className="feature-description">{contactData.address.description}</p>
            </div>

            {/* Tarjeta de horario */}
            <div className="feature-item contact-feature schedule-feature">
              <div className="feature-icon-vertical">
                {contactData.schedule.icon}
              </div>
              <h3 className="feature-title">{contactData.schedule.title}</h3>
              <div className="schedule-container">
                {contactData.schedule.data.map((item, index) => (
                  <div className="schedule-row" key={index}>
                    <span className="schedule-day">{item.day}:</span>
                    {item.closed ? (
                      <span className="schedule-hours closed">
                        {item.hours} <LuLock className="closed-icon" />
                      </span>
                    ) : (
                      <span className="schedule-hours">{item.hours}</span>
                    )}
                  </div>
                ))}
                <p className="appointment-note">*Cita previa recomendada</p>
              </div>
            </div>
            
            {/* Tarjeta de contacto */}
            <div className="feature-item contact-feature">
              <div className="feature-icon-vertical">
                {contactData.phone.icon}
              </div>
              <h3 className="feature-title">{contactData.phone.title}</h3>
              <p className="feature-description">
                <a href="tel:+34977333869" className="phone-link">{contactData.phone.phone}</a>
                <span className="contact-note">{contactData.phone.note}</span>
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/SebiEstetica/" target="_blank" rel="noopener noreferrer" className="link-button">
                  Facebook
                </a>
                <a href="https://www.instagram.com/explore/locations/1035209578/sebi-estetica/?locale=es_ES/" target="_blank" rel="noopener noreferrer" className="link-button">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
