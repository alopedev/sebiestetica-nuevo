import React from 'react';
import { LuAward, LuUsers, LuSparkles } from 'react-icons/lu';
import './AboutUs.css';
import treatmentImage from '../../assets/images/handsOn.webp';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: <LuAward />,
      title: 'Profesionalidad Certificada',
      description: 'Sebiestetica cuenta con todas las certificaciones especializadas en estética y bienestar.'
    },
    {
      id: 2,
      icon: <LuUsers />,
      title: 'Atención Personalizada',
      description: 'Ofrecemos un trato cercano y adaptado a las necesidades de cada cliente.'
    },
    {
      id: 3,
      icon: <LuSparkles />,
      title: 'Resultados Visibles',
      description: 'Técnicas avanzadas que ofrecen resultados notables desde la primera sesión.'
    }
  ];

  return (
    <section className="about-us about-us-full-height" id="sobre-mi">
      <div className="about-container">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img src={treatmentImage} alt="Tratamiento en Sebiestetica" className="about-image" />
            <div className="experience-badge">
              <span className="experience-number">20+</span>
              <span className="experience-text">AÑOS DE EXPERIENCIA</span>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="about-title">Mi Promesa: Belleza y Bienestar</h2>
          <p className="about-description">
            Desde hace más de 20 años, mi pasión ha sido realzar la belleza natural de cada persona que confía en mí. 
            En Sebiestetica, cada tratamiento es una experiencia personalizada diseñada para brindarte no solo resultados 
            visibles, sino también un momento de absoluto bienestar y cuidado.
          </p>
          
          <div className="features-container">
            {features.map(feature => (
              <div className="feature-item" key={feature.id}>
                <div className="feature-icon-vertical">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
