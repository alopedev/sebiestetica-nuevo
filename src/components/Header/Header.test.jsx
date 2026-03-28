import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

const renderHeader = () => {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
}

describe('Header', () => {
  it('renders exactly 3 navigation links', () => {
    renderHeader()
    const links = screen.getAllByRole('link').filter(link => {
      const href = link.getAttribute('href')
      return href === '/tratamientos' || href === '/sobre-mi' || href === '/donde-estamos'
    })
    expect(links).toHaveLength(3)
  })

  it('navigation links have correct paths', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /tratamientos/i })).toHaveAttribute('href', '/tratamientos')
    expect(screen.getByRole('link', { name: /sobre mí/i })).toHaveAttribute('href', '/sobre-mi')
    expect(screen.getByRole('link', { name: /contacto/i })).toHaveAttribute('href', '/donde-estamos')
  })

  it('hamburger button has aria-expanded=false initially', () => {
    renderHeader()
    const btn = screen.getByLabelText('Menú de navegación')
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking hamburger sets aria-expanded=true', async () => {
    const user = userEvent.setup()
    renderHeader()
    const btn = screen.getByLabelText('Menú de navegación')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('hamburger has aria-controls pointing to nav id', () => {
    renderHeader()
    const btn = screen.getByLabelText('Menú de navegación')
    expect(btn).toHaveAttribute('aria-controls', 'main-nav')
    expect(document.getElementById('main-nav')).toBeTruthy()
  })

  it('has a skip-to-content link', () => {
    renderHeader()
    const skip = screen.getByText('Saltar al contenido')
    expect(skip).toHaveAttribute('href', '#main')
  })

  it('has a WhatsApp CTA button', () => {
    renderHeader()
    expect(screen.getByLabelText('Contactar por WhatsApp')).toBeTruthy()
  })
})
