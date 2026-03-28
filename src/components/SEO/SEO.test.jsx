import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SEO from './SEO'

const renderSEO = (props) => {
  return render(
    <MemoryRouter>
      <SEO {...props} />
    </MemoryRouter>
  )
}

describe('SEO', () => {
  beforeEach(() => {
    document.title = ''
    document.head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], link[rel="canonical"]').forEach(el => el.remove())
  })

  it('sets document.title from title prop', () => {
    renderSEO({ title: 'Test Title' })
    expect(document.title).toBe('Test Title')
  })

  it('sets meta description', () => {
    renderSEO({ description: 'Test description' })
    const meta = document.head.querySelector('meta[name="description"]')
    expect(meta).toBeTruthy()
    expect(meta.getAttribute('content')).toBe('Test description')
  })

  it('sets Open Graph tags', () => {
    renderSEO({ title: 'OG Test', description: 'OG Desc' })
    expect(document.head.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe('OG Test')
    expect(document.head.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe('OG Desc')
    expect(document.head.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('website')
  })

  it('sets og:image only when image prop provided', () => {
    renderSEO({ title: 'No Image' })
    expect(document.head.querySelector('meta[property="og:image"]')).toBeNull()

    renderSEO({ title: 'With Image', image: 'https://example.com/img.jpg' })
    expect(document.head.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe('https://example.com/img.jpg')
  })

  it('sets twitter:card to summary by default, summary_large_image with image', () => {
    renderSEO({ title: 'No Image' })
    expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary')

    renderSEO({ title: 'With Image', image: 'https://example.com/img.jpg' })
    expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image')
  })

  it('sets canonical link', () => {
    renderSEO({ canonical: 'https://example.com/page' })
    const link = document.head.querySelector('link[rel="canonical"]')
    expect(link).toBeTruthy()
    expect(link.getAttribute('href')).toBe('https://example.com/page')
  })

  it('does not duplicate meta tags on re-render', () => {
    const { rerender } = render(
      <MemoryRouter><SEO title="First" description="First desc" /></MemoryRouter>
    )
    rerender(
      <MemoryRouter><SEO title="Second" description="Second desc" /></MemoryRouter>
    )
    expect(document.head.querySelectorAll('meta[name="description"]').length).toBe(1)
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Second desc')
  })
})
