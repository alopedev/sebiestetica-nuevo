import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// Importamos framer-motion usando el nombre del paquete
import { AnimatePresence } from 'framer-motion';

// Componentes principales
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Tratamientos from './components/Tratamientos/Tratamientos'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import PageTransition from './components/transitions/PageTransition'

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
                  <Hero />
                  <Testimonials />
                </>
              </PageTransition>
            } />
            <Route path="/tratamientos" element={
              <PageTransition>
                <Tratamientos />
              </PageTransition>
            } />
            <Route path="/servicios" element={
              <PageTransition>
                <div className="page-content">Página de Servicios</div>
              </PageTransition>
            } />
            <Route path="/sobre-mi" element={
              <PageTransition>
                <AboutUs />
              </PageTransition>
            } />
            <Route path="/donde-estamos" element={
              <PageTransition>
                <Contact />
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
