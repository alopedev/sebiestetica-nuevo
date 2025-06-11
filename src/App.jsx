import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// Componente para manejar las animaciones
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
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
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Header con navegación */}
        <Header />

        <main className="main-content">
          <AnimatedRoutes />
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
