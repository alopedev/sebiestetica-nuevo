import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ScrollAnimation from './ScrollAnimation'

let mockCallback

beforeEach(() => {
  global.IntersectionObserver = vi.fn(function (callback) {
    mockCallback = callback
    this.observe = vi.fn()
    this.unobserve = vi.fn()
    this.disconnect = vi.fn()
  })
})

describe('ScrollAnimation', () => {
  it('renders children', () => {
    render(<ScrollAnimation>Hello</ScrollAnimation>)
    expect(screen.getByText('Hello')).toBeTruthy()
  })

  it('applies scroll-animation and animation class', () => {
    render(<ScrollAnimation animation="slide-up"><span>Test</span></ScrollAnimation>)
    const wrapper = screen.getByText('Test').parentElement
    expect(wrapper.classList.contains('scroll-animation')).toBe(true)
    expect(wrapper.classList.contains('slide-up')).toBe(true)
  })

  it('applies delay class when delay prop is set', () => {
    render(<ScrollAnimation delay={200}><span>Test</span></ScrollAnimation>)
    const wrapper = screen.getByText('Test').parentElement
    expect(wrapper.classList.contains('delay-200')).toBe(true)
  })

  it('does not apply is-visible class initially', () => {
    render(<ScrollAnimation><span>Test</span></ScrollAnimation>)
    const wrapper = screen.getByText('Test').parentElement
    expect(wrapper.classList.contains('is-visible')).toBe(false)
  })

  it('renders custom tag when tag prop is set', () => {
    render(<ScrollAnimation tag="section"><span>Test</span></ScrollAnimation>)
    const wrapper = screen.getByText('Test').parentElement
    expect(wrapper.tagName).toBe('SECTION')
  })
})
