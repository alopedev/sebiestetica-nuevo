import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes principales
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Tratamientos from './components/Tratamientos/Tratamientos'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Header con navegación */}
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Testimonials />
              </>
            } />
            <Route path="/tratamientos" element={<Tratamientos />} />
            <Route path="/servicios" element={<div className="page-content">Página de Servicios</div>} />
            <Route path="/sobre-mi" element={<AboutUs />} />
            <Route path="/donde-estamos" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
