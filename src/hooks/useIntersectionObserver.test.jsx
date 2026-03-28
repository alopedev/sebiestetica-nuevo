import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, act } from '@testing-library/react'
import { useIntersectionObserver } from './useIntersectionObserver'

let mockObserve, mockUnobserve, mockCallback

beforeEach(() => {
  mockObserve = vi.fn()
  mockUnobserve = vi.fn()
  mockCallback = null

  global.IntersectionObserver = vi.fn(function (callback) {
    mockCallback = callback
    this.observe = mockObserve
    this.unobserve = mockUnobserve
    this.disconnect = vi.fn()
  })
})

// Test component that uses the hook and attaches the ref to a real DOM element
function TestComponent({ options = {} }) {
  const [ref, isVisible] = useIntersectionObserver(options)
  return <div ref={ref} data-testid="target" data-visible={String(isVisible)} />
}

describe('useIntersectionObserver', () => {
  it('returns isVisible=false initially', () => {
    const { getByTestId } = render(<TestComponent />)
    expect(getByTestId('target').dataset.visible).toBe('false')
  })

  it('observes the element on mount', () => {
    render(<TestComponent />)
    expect(mockObserve).toHaveBeenCalledTimes(1)
  })

  it('becomes visible when element intersects', () => {
    const { getByTestId } = render(<TestComponent />)

    act(() => {
      mockCallback([{ isIntersecting: true }])
    })

    expect(getByTestId('target').dataset.visible).toBe('true')
  })

  it('calls unobserve after first intersection (once-only behavior)', () => {
    render(<TestComponent />)

    act(() => {
      mockCallback([{ isIntersecting: true }])
    })

    expect(mockUnobserve).toHaveBeenCalled()
  })

  it('passes options to IntersectionObserver constructor', () => {
    render(<TestComponent options={{ threshold: 0.5, rootMargin: '10px' }} />)

    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5,
        rootMargin: '10px',
      })
    )
  })
})
