# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Sebiestetica**, an aesthetics/beauty center in Reus, Tarragona (Spain). Single Page Application built with React 19 + Vite 6, deployed on Netlify.

## Commands

- `npm run dev` — Start dev server (port 5173, Netlify Dev proxies on 8888)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

**Routing (React Router DOM 7):** `App.jsx` defines all routes inside `BrowserRouter`. Each route wraps its content in `PageTransition` (Framer Motion) and includes a `SEO` component for per-route meta tags. Netlify's `/* -> /index.html (200)` redirect enables client-side routing.

**Routes:**
- `/` — Hero + Testimonials
- `/tratamientos` — Treatment listings
- `/sobre-mi` — About the professional
- `/donde-estamos` — Contact info, schedule, Google Maps embed
- `/servicios` — Placeholder (undeveloped)

**Layout pattern:** `Header` and `Footer` render on every page outside `<Routes>`. `Header` handles mobile menu (hamburger, overlay, scroll lock) and scroll-based shadow. `Footer` uses Font Awesome icons via CDN.

**Styling:** CSS variables defined in `src/index.css` (`:root` block). No CSS framework. `index.css` contains global styles plus Header, Hero, Testimonials, and Footer styles (~1470 lines). Tratamientos, AboutUs, and Contact have their own CSS files in their component folders.

**Fonts:** Cooper Black (local `.ttf`/`.otf` in `src/assets/fonts/`) for headings, Instrument Sans (Google Fonts import in CSS) for body text. Note: `index.html` also loads Playfair Display and Montserrat from Google Fonts but these are **not used** in the CSS.

**Color palette (CSS variables):**
- `--color-primary`: `#2f2f2f` (dark gray)
- `--color-secondary`: `#f5f5f3` (cream)
- `--color-accent`: `#ffcb45` (golden yellow)
- Gold tones in icons/borders: `#be9b7b`, `#d4af37`

**Icons:** Mixed approach — react-icons (Lucide set) in page components, inline SVGs in Header, Font Awesome CDN in Footer.

**Animations:** `ScrollAnimation` component wraps elements to animate on viewport entry using a custom `useIntersectionObserver` hook. `PageTransition` uses Framer Motion for route change animations.

**SEO component** (`src/components/SEO/SEO.jsx`): Imperatively manages `<title>`, meta description, Open Graph, Twitter Card, and canonical link via DOM manipulation in `useEffect`. Canonical URLs currently point to `sebiestetica.windsurf.build` (staging domain).

**Business data:** Contact info, address (Carrer de Xavier Gambús, 1, 43202 Reus), phone (+34 977 33 38 69), WhatsApp (+34 677 412 424), and opening hours are hardcoded in components and `index.html` JSON-LD.

## Key Conventions

- All text content is in **Spanish**.
- Component folders use PascalCase (`AboutUs/`, `ScrollAnimation/`).
- JSX files use `.jsx` extension; no TypeScript in source (tsconfig exists but unused).
- Images are WebP format in `src/assets/images/`.
- The `#root` element has `text-align: center` set globally — individual components override this as needed.
