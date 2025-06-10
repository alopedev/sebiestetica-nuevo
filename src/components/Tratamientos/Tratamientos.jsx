import React from 'react';
import { LuPencil, LuEye, LuPencilRuler, LuGraduationCap, LuSprout, LuPaintbrush, LuDna, LuHandMetal } from 'react-icons/lu';
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
      titulo: "Tinte de cejas y pestañas",
      descripcion: "Dale color y definición a tus cejas y pestañas para lucir una mirada intensa sin necesidad de maquillaje.",
      icono: <LuPaintbrush />
    },
    {
      id: 7,
      titulo: "Terapia de inducción de colágeno",
      descripcion: "Tratamiento avanzado que estimula la renovación celular y la producción de colágeno para una piel más firme y rejuvenecida.",
      icono: <LuDna />
    },
    {
      id: 8,
      titulo: "Manicura",
      descripcion: "Cuidado completo para tus manos y uñas con técnicas profesionales y los mejores productos para un acabado perfecto y duradero.",
      icono: <LuHandMetal />
    }
  ];

  return (
    <section className="tratamientos" id="tratamientos">
      <div className="container">
        <div className="tratamientos-title">
          <h2>Nuestros Tratamientos</h2>
          <p>Descubre nuestra amplia gama de tratamientos especializados para resaltar tu belleza natural.</p>
        </div>

        <div className="tratamientos-grid">
          {tratamientos.map(tratamiento => {
            // Determinar clases adicionales basadas en contenido/importancia
            let cardClass = "tratamiento-card";
            if (tratamiento.titulo === "Microblading" || tratamiento.titulo === "Diseño de cejas") {
              cardClass += " tratamiento-destacado";
            }
            
            return (
              <div className={cardClass} key={tratamiento.id}>
                <div className="tratamiento-icon">
                  {tratamiento.icono}
                </div>
                <h3 className="tratamiento-title">{tratamiento.titulo}</h3>
                <div className="tratamiento-separator"></div>
                <p className="tratamiento-description">{tratamiento.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tratamientos;
