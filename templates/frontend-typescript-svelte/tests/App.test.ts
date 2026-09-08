import { render, fireEvent, screen } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import App from '../src/App.svelte'

describe('Svelte + TypeScript App Component', () => {
  it('renders starter title and branding', () => {
    render(App)
    expect(screen.getByText('TemplateGen Starter')).toBeDefined()
    expect(screen.getByText('Interactive Counter')).toBeDefined()
  })

  it('initializes counter at 0 and increments reactively upon click', async () => {
    render(App)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    expect(button).toBeDefined()

    await fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeDefined()

    await fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 2/i })).toBeDefined()
  })
})
