import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes principales
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Tratamientos from './components/Tratamientos/Tratamientos';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import PageTransition from './components/transitions/PageTransition';
import SEO from './components/SEO/SEO';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

// Componente interno que puede usar hooks de react-router
function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      {/* Header con navegación */}
      <Header />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <>
                  <SEO
                    title="Sebiestetica | Centro de belleza en Reus"
                    description="Centro de belleza en Reus: tratamientos faciales y corporales, depilación y bienestar. Pide tu cita por WhatsApp al +34 677 412 424."
                    canonical="https://sebiestetica.windsurf.build/"
                  />
                  <Hero />
                  <Testimonials />
                </>
              </PageTransition>
            } />
            <Route path="/tratamientos" element={
              <PageTransition>
                <>
                  <SEO
                    title="Tratamientos | Sebiestetica"
                    description="Tratamientos de estética en Reus: faciales, corporales y depilación. Asesoramiento personalizado."
                    canonical="https://sebiestetica.windsurf.build/tratamientos"
                  />
                  <Tratamientos />
                </>
              </PageTransition>
            } />
            <Route path="/servicios" element={
              <PageTransition>
                <div className="page-content">Página de Servicios</div>
              </PageTransition>
            } />
            <Route path="/sobre-mi" element={
              <PageTransition>
                <>
                  <SEO
                    title="Sobre mí | Sebiestetica"
                    description="Conoce a la profesional detrás de Sebiestetica en Reus: experiencia, filosofía y trato cercano."
                    canonical="https://sebiestetica.windsurf.build/sobre-mi"
                  />
                  <AboutUs />
                </>
              </PageTransition>
            } />
            <Route path="/donde-estamos" element={
              <PageTransition>
                <>
                  <SEO
                    title="Dónde estamos | Sebiestetica"
                    description="Contacto de Sebiestetica en Reus: dirección, horarios y WhatsApp para citas."
                    canonical="https://sebiestetica.windsurf.build/donde-estamos"
                  />
                  <Contact />
                </>
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}

export default App
