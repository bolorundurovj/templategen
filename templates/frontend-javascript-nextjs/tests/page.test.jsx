import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../app/page'

describe('Next.js Home Page', () => {
  it('renders starter branding and instructions', () => {
    render(<Home />)
    expect(screen.getByText(/TemplateGen Starter/i)).toBeDefined()
    expect(screen.getByText(/Interactive Counter/i)).toBeDefined()
  })

  it('renders initial counter at 0 and increments upon click', () => {
    render(<Home />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    expect(button).toBeDefined()

    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeDefined()

    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 2/i })).toBeDefined()
  })
})
