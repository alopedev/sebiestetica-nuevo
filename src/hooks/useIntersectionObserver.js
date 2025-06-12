import { useState, useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport
 * @param {Object} options - Opciones para el IntersectionObserver
 * @param {Number} options.threshold - Porcentaje del elemento visible para activar (0-1)
 * @param {String|Element} options.root - Elemento que se usa como viewport
 * @param {String} options.rootMargin - Margen alrededor del root
 * @returns {Array} - [ref, isVisible] donde ref es la referencia al elemento y isVisible indica si está en viewport
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento entre en el viewport, cambiar isVisible a true
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Una vez que el elemento es visible, ya no necesitamos observarlo
        observer.unobserve(element);
      }
    }, {
      threshold: options.threshold || 0.1, // Por defecto, cuando el 10% es visible
      root: options.root || null,
      rootMargin: options.rootMargin || '0px'
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
