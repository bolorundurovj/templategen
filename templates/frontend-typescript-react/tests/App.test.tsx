import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App Component', () => {
  it('renders welcome title and subtitle', () => {
    render(<App />)
    expect(screen.getByText(/TemplateGen Starter/i)).toBeDefined()
    expect(screen.getByText(/Interactive Counter/i)).toBeDefined()
  })

  it('renders initial counter state and increments on click', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    expect(button).toBeDefined()

    // Click to increment
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeDefined()

    // Click again to increment
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 2/i })).toBeDefined()
  })
})
