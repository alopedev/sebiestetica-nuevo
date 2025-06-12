import React from 'react';
import { LuPencil, LuEye, LuPencilRuler, LuGraduationCap, LuSprout, LuPaintbrush, LuBrush, LuHandMetal, LuFootprints } from 'react-icons/lu';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import './Tratamientos.css';

const Tratamientos = () => {
  // Datos de tratamientos basados en la imagen de referencia
  const tratamientos = [
    {
      id: 1,
      titulo: "Microblading",
      descripcion: "Técnica semipermanente para cejas perfectamente definidas y naturales que dura hasta 2 años.",
      icono: <LuPencil />
    },
    {
      id: 2,
      titulo: "Micropigmentación",
      descripcion: "Realza tus labios, ojos y cejas con esta técnica de maquillaje semipermanente de alta precisión.",
      icono: <LuEye />
    },
    {
      id: 3,
      titulo: "Micropunción",
      descripcion: "Tratamiento rejuvenecedor que estimula la producción natural de colágeno y elastina en la piel.",
      icono: <LuPencilRuler />
    },
    {
      id: 4,
      titulo: "Escuela de maquillaje",
      descripcion: "Aprende técnicas profesionales para resaltar tu belleza natural con nuestros cursos personalizados.",
      icono: <LuGraduationCap />
    },
    {
      id: 5,
      titulo: "Diseño de cejas",
      descripcion: "Diseñamos tus cejas según la morfología de tu rostro para conseguir una mirada armónica y expresiva.",
      icono: <LuSprout />
    },
    {
      id: 6,
      titulo: "Tinte y permanente de pestañas",
      descripcion: "Consigue pestañas curvadas, con volumen y color duradero para una mirada intensa y expresiva sin necesidad de máscara.",
      icono: <LuPaintbrush />
    },
    {
      id: 7,
      titulo: "Tinte de cejas",
      descripcion: "Intensifica el color de tus cejas para darles definición y un aspecto más poblado sin necesidad de maquillaje diario.",
      icono: <LuBrush />
    },
    {
      id: 8,
      titulo: "Manicura",
      descripcion: "Cuidado completo para tus manos y uñas con técnicas profesionales y los mejores productos para un acabado perfecto y duradero.",
      icono: <LuHandMetal />
    },
    {
      id: 9,
      titulo: "Pedicura",
      descripcion: "Tratamiento completo para el cuidado de tus pies, incluyendo exfoliación, hidratación y esmalte para un aspecto renovado y saludable.",
      icono: <LuFootprints />
    }
  ];

  return (
    <section className="tratamientos" id="tratamientos">
      <div className="container">
        <ScrollAnimation animation="slide-up">
          <div className="tratamientos-title">
            <h2>Nuestros Tratamientos</h2>
            <p>Descubre nuestra amplia gama de tratamientos especializados para resaltar tu belleza natural.</p>
          </div>
        </ScrollAnimation>

        <div className="tratamientos-grid">
          {tratamientos.map(tratamiento => {
            // Determinar clases adicionales basadas en contenido/importancia
            let cardClass = "tratamiento-card";
            if (tratamiento.titulo === "Microblading" || tratamiento.titulo === "Diseño de cejas") {
              cardClass += " tratamiento-destacado";
            }
            
            return (
              <ScrollAnimation 
                animation="fade-in" 
                delay={(tratamiento.id % 3) * 100} 
                className={cardClass} 
                key={tratamiento.id}>
                <div className="tratamiento-icon">
                  {tratamiento.icono}
                </div>
                <h3 className="tratamiento-title">{tratamiento.titulo}</h3>
                <div className="tratamiento-separator"></div>
                <p className="tratamiento-description">{tratamiento.descripcion}</p>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tratamientos;
