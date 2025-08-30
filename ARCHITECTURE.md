# Sebiestetica – Arquitectura y Flujo de la Aplicación

Este documento describe el funcionamiento de la aplicación, sus apartados principales y las tecnologías utilizadas.

## Resumen
- Aplicación SPA (Single Page Application) construida con React + Vite.
- Enrutamiento con React Router y transiciones con Framer Motion.
- Despliegue en Netlify con redirección SPA.
- Estructura modular por componentes y páginas.

## Tecnologías principales
- React 19 (`react`, `react-dom`)
- Vite 6 como bundler/dev server (`vite`, `@vitejs/plugin-react`)
- React Router DOM 7 para rutas (`react-router-dom`)
- Framer Motion para transiciones entre páginas
- react-slick + slick-carousel (carruseles/testimonios)
- Font Awesome (iconos via CDN en `index.html`)
- Google Fonts (Playfair Display, Montserrat) con `preconnect`

Dependencias relevantes: ver `package.json`.

## Estructura de carpetas
```
/ (raíz)
├─ index.html               # HTML base (punto de montaje #root)
├─ netlify.toml             # Configuración de build/redirects en Netlify
├─ vite.config.js           # Configuración de Vite y plugin React
├─ public/                  # Activos públicos (sirven desde /)
├─ src/
│  ├─ main.jsx              # Entrada de la app (ReactDOM)
│  ├─ App.jsx               # Enrutamiento + layout principal
│  ├─ assets/               # Imágenes, fuentes
│  ├─ components/
│  │  ├─ Header/Header.jsx  # Cabecera y navegación (desktop/móvil)
│  │  ├─ Footer/Footer.jsx  # Pie de página
│  │  ├─ Hero/Hero.jsx      # Sección hero de Home
│  │  ├─ Testimonials/...   # Testimonios (usa carrusel)
│  │  ├─ Tratamientos/...   # Página de tratamientos
│  │  ├─ AboutUs/...        # Página "Sobre mí"
│  │  ├─ Contact/...        # Página "Dónde estamos/Contacto"
│  │  └─ transitions/PageTransition.jsx # Transición entre rutas
│  └─ hooks/                # Hooks reutilizables (p. ej., IntersectionObserver)
└─ dist/                    # Salida de build (generada)
```

## Flujo de la aplicación

1) Inicio y montaje
- El navegador carga `index.html`, que define el contenedor `<div id="root">` y los enlaces a fuentes e iconos.
- `src/main.jsx` hidrata la app React e importa `App.jsx`.

2) Layout y enrutamiento (`src/App.jsx`)
- Se usa `<BrowserRouter>` para habilitar rutas de SPA.
- El layout global incluye `Header` (siempre visible), `<main>` con el contenido de cada ruta y `Footer`.
- Rutas definidas:
  - `/` (Home): muestra `Hero` y `Testimonials` dentro de `PageTransition`.
  - `/tratamientos`: muestra la página de tratamientos.
  - `/sobre-mi`: muestra la página de "Sobre mí".
  - `/donde-estamos`: muestra la página de contacto/localización.
  - `/servicios`: placeholder con texto simple (no principal).
- `AnimatePresence` + `PageTransition` proporcionan animaciones entre cambios de ruta.

3) Cabecera y navegación (`components/Header/Header.jsx`)
- Logo con `alt` descriptivo enlazando a `/`.
- Menú hamburguesa para móvil con estado `menuOpen` y bloqueo de scroll cuando está abierto.
- Cierre automático del menú al cambiar de ruta o al hacer clic fuera.
- CTA de WhatsApp y enlaces a redes sociales (visibles en móvil dentro del menú).
- Enlaces de navegación a `/tratamientos`, `/sobre-mi`, `/donde-estamos` con `NavLink` para estado activo.

4) Pie de página (`components/Footer/Footer.jsx`)
- Derechos de autor con año dinámico.
- Enlaces a redes y teléfono (`tel:`) con `aria-label`.

5) Páginas/Secciones
- Home (`/`): `Hero` (impacto visual; contenido principal) + `Testimonials` (prueba social). 
- Tratamientos (`/tratamientos`): listados/servicios del centro.
- Sobre mí (`/sobre-mi`): presentación de la profesional y propuesta de valor.
- Dónde estamos (`/donde-estamos`): información de contacto, horarios y mapa.
- Servicios (`/servicios`): página placeholder, no crítica.

6) Estilos y activos
- Fuentes desde Google Fonts (Playfair Display, Montserrat) declaradas en `index.html`.
- Iconos con Font Awesome (CDN) y SVGs embebidos para algunas acciones (p. ej., WhatsApp).
- Imágenes en `src/assets/` (por ejemplo, `sebiestetica_Logo.webp`).
- Variables de color y tipografía gestionadas en los estilos del proyecto (no detallados en este doc). 

## Build y despliegue
- Build: `npm run build` (Vite) genera `dist/`.
- Desarrollo: `npm run dev` (Vite en puerto 5173 por defecto; proxied por Netlify Dev en 8888).
- Netlify (`netlify.toml`):
  - `[build]` publica `dist/` usando `npm run build`.
  - Redirección SPA: `/* -> /index.html (200)` para soportar `BrowserRouter`.
  - Config `dev`: comando `npm run dev`, `targetPort=5173`, `port=8888`.

## Cómo ejecutar localmente
```bash
npm install
npm run dev   # abre el servidor en http://localhost:5173
npm run build # genera producción en /dist
npm run preview
```

## Observaciones operativas
- El enrutado es del lado del cliente (SPA). La redirección en Netlify garantiza que al refrescar rutas internas se sirva `index.html`.
- El menú móvil desactiva el scroll del `body` cuando está abierto para evitar desplazamientos indeseados.
- Las animaciones de `framer-motion` están encapsuladas en `PageTransition` para mantener las páginas limpias.

## Notas sobre SEO (estado actual)
- Título general definido en `index.html`.
- Aún no se gestiona `<title>`/`<meta>` por ruta. No hay `sitemap.xml` ni `robots.txt` en `public/`.
- Próximas mejoras sugeridas: `react-helmet-async`, metadatos OG/Twitter por página, `robots.txt`, `sitemap.xml` y marcado `LocalBusiness`.

---

Última actualización: 2025-08-30
