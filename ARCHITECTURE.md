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
│  │  ├─ transitions/PageTransition.jsx # Transición entre rutas
│  │  └─ SEO/SEO.jsx        # Componente SEO ligero (title/meta/OG/Twitter/canonical)
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
 - SEO por ruta: se inyecta con el componente `SEO` (titular, meta description, Open Graph/Twitter y canonical) sin afectar la UI.

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
- `index.html`: contiene `meta name="description"` global y `meta name="theme-color"`.
- SEO por ruta activo con `src/components/SEO/SEO.jsx` (title, meta description, Open Graph, Twitter Card y canonical) integrado en `App.jsx` para `/`, `/tratamientos`, `/sobre-mi`, `/donde-estamos`.
- Archivos de rastreo creados en `public/`:
  - `robots.txt` permitiendo indexación y referenciando el sitemap.
  - `sitemap.xml` con rutas principales del sitio.
- Marcado estructurado añadido: JSON‑LD `LocalBusiness` en `index.html` con dirección, teléfono, horarios y perfiles sociales.

## Convenciones para SEO por ruta

- __Componente__: `src/components/SEO/SEO.jsx`
- __Props soportadas__:
  - `title: string` → establece `<title>` y `og:title`, `twitter:title`.
  - `description: string` → establece `meta description`, `og:description`, `twitter:description`.
  - `image?: string` → URL absoluta para `og:image` y `twitter:image` (recomendado 1200x630).
  - `canonical?: string` → establece `link[rel=canonical]`. Si no se pasa, usa `location.origin + pathname`.
  - `type?: 'website' | 'article'` → por defecto `website` (mapea a `og:type`).

### Ejemplos de uso

Home (`/`):
```jsx
<SEO
  title="Sebiestetica | Centro de belleza en Reus"
  description="Centro de belleza en Reus: tratamientos faciales y corporales, depilación y bienestar. Pide tu cita por WhatsApp al +34 677 412 424."
  canonical="https://sebiestetica.windsurf.build/"
  // image="https://sebiestetica.windsurf.build/og/home.jpg"
/>
```

Tratamientos (`/tratamientos`):
```jsx
<SEO
  title="Tratamientos | Sebiestetica"
  description="Tratamientos de estética en Reus: faciales, corporales y depilación. Asesoramiento personalizado."
  canonical="https://sebiestetica.windsurf.build/tratamientos"
/>
```

Sugerencias:
- Mantener títulos < 60 caracteres y descriptions 150–160.
- Usar URLs absolutas para `image`.
- Si migras a dominio propio, actualizar `canonical` en cada ruta.

---

Última actualización: 2025-08-30
