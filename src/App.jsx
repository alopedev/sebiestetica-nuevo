import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SITE } from './data/siteConfig';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Tratamientos from './components/Tratamientos/Tratamientos';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import PageTransition from './components/transitions/PageTransition';
import SEO from './components/SEO/SEO';

const routes = [
  {
    path: '/',
    seo: {
      title: 'Sebiestetica | Centro de belleza en Reus',
      description: 'Centro de belleza en Reus: tratamientos faciales y corporales, depilación y bienestar. Pide tu cita por WhatsApp al +34 677 412 424.',
    },
    element: <><Hero /><Testimonials /></>,
  },
  {
    path: '/tratamientos',
    seo: {
      title: 'Tratamientos | Sebiestetica',
      description: 'Tratamientos de estética en Reus: faciales, corporales y depilación. Asesoramiento personalizado.',
    },
    element: <Tratamientos />,
  },
  {
    path: '/sobre-mi',
    seo: {
      title: 'Sobre mí | Sebiestetica',
      description: 'Conoce a la profesional detrás de Sebiestetica en Reus: experiencia, filosofía y trato cercano.',
    },
    element: <AboutUs />,
  },
  {
    path: '/donde-estamos',
    seo: {
      title: 'Dónde estamos | Sebiestetica',
      description: 'Contacto de Sebiestetica en Reus: dirección, horarios y WhatsApp para citas.',
    },
    element: <Contact />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />

      <main id="main" className="main-content">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, seo, element }) => (
            <Route key={path} path={path} element={
              <PageTransition>
                <SEO {...seo} canonical={`${SITE.url}${path === '/' ? '/' : path}`} />
                {element}
              </PageTransition>
            } />
          ))}
          <Route path="/servicios" element={<Navigate to="/tratamientos" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App
