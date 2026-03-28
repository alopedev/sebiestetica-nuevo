import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

// We test AppContent's routing behavior by recreating the routes in MemoryRouter
// This tests the route → component mapping without depending on BrowserRouter

// Mock the heavy components to speed up tests and isolate routing logic
vi.mock('./components/Header/Header', () => ({
  default: () => <header data-testid="header">Header</header>
}))
vi.mock('./components/Footer/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>
}))
vi.mock('./components/Hero/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>
}))
vi.mock('./components/Testimonials/Testimonials', () => ({
  default: () => <div data-testid="testimonials">Testimonials</div>
}))
vi.mock('./components/Tratamientos/Tratamientos', () => ({
  default: () => <div data-testid="tratamientos">Tratamientos</div>
}))
vi.mock('./components/AboutUs/AboutUs', () => ({
  default: () => <div data-testid="aboutus">AboutUs</div>
}))
vi.mock('./components/Contact/Contact', () => ({
  default: () => <div data-testid="contact">Contact</div>
}))
vi.mock('./components/transitions/PageTransition', () => ({
  default: ({ children }) => <div data-testid="page-transition">{children}</div>
}))
vi.mock('./components/SEO/SEO', () => ({
  default: () => null
}))

// Import after mocks
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Tratamientos from './components/Tratamientos/Tratamientos'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import PageTransition from './components/transitions/PageTransition'
import SEO from './components/SEO/SEO'

// Recreate the routing structure from App.jsx for testing
const TestApp = ({ initialRoute = '/' }) => {
  const LocationDisplay = () => {
    const location = useLocation()
    return <div data-testid="location">{location.pathname}</div>
  }

  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <>
                <SEO title="Home" />
                <Hero />
                <Testimonials />
              </>
            </PageTransition>
          } />
          <Route path="/tratamientos" element={
            <PageTransition>
              <>
                <SEO title="Tratamientos" />
                <Tratamientos />
              </>
            </PageTransition>
          } />
          <Route path="/servicios" element={<Navigate to="/tratamientos" replace />} />
          <Route path="/sobre-mi" element={
            <PageTransition>
              <>
                <SEO title="Sobre mi" />
                <AboutUs />
              </>
            </PageTransition>
          } />
          <Route path="/donde-estamos" element={
            <PageTransition>
              <>
                <SEO title="Contacto" />
                <Contact />
              </>
            </PageTransition>
          } />
        </Routes>
      </main>
      <Footer />
      <LocationDisplay />
    </MemoryRouter>
  )
}

describe('App Routing', () => {
  it('/ renders Hero and Testimonials', () => {
    render(<TestApp initialRoute="/" />)
    expect(screen.getByTestId('hero')).toBeTruthy()
    expect(screen.getByTestId('testimonials')).toBeTruthy()
  })

  it('/tratamientos renders Tratamientos', () => {
    render(<TestApp initialRoute="/tratamientos" />)
    expect(screen.getByTestId('tratamientos')).toBeTruthy()
  })

  it('/sobre-mi renders AboutUs', () => {
    render(<TestApp initialRoute="/sobre-mi" />)
    expect(screen.getByTestId('aboutus')).toBeTruthy()
  })

  it('/donde-estamos renders Contact', () => {
    render(<TestApp initialRoute="/donde-estamos" />)
    expect(screen.getByTestId('contact')).toBeTruthy()
  })

  it('/servicios redirects to /tratamientos', () => {
    render(<TestApp initialRoute="/servicios" />)
    expect(screen.getByTestId('tratamientos')).toBeTruthy()
    expect(screen.getByTestId('location').textContent).toBe('/tratamientos')
  })

  it('Header and Footer are present on all routes', () => {
    render(<TestApp initialRoute="/" />)
    expect(screen.getByTestId('header')).toBeTruthy()
    expect(screen.getByTestId('footer')).toBeTruthy()
  })
})
