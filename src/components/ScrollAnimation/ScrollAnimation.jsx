import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ScrollAnimation.css';

/**
 * Componente para animar elementos cuando entran en el viewport
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Elementos hijos a animar
 * @param {string} props.animation - Tipo de animación ('fade-in', 'slide-up', 'slide-right', 'slide-left', 'zoom-in')
 * @param {number} props.delay - Retraso en milisegundos para la animación (0, 100, 200, 300, 400, 500)
 * @param {number} props.threshold - Umbral para activar la animación (0-1)
 * @param {string} props.className - Clases adicionales
 * @param {string} props.tag - Elemento HTML a renderizar ('div', 'section', etc.)
 * @returns {React.ReactElement}
 */
const ScrollAnimation = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
  tag: Tag = 'div',
  ...props
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: threshold,
    rootMargin: '0px 0px -50px 0px', // Activar un poco antes de que el elemento entre completamente
  });

  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const animationClass = animation || 'fade-in';
  const visibilityClass = isVisible ? 'is-visible' : '';
  
  return (
    <Tag
      ref={ref}
      className={`scroll-animation ${animationClass} ${delayClass} ${visibilityClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ScrollAnimation;
