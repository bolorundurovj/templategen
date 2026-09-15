import { render, screen, fireEvent } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import Layout from '../src/lib/components/Layout.svelte'

describe('Layout Component', () => {
  it('renders navigation links and footer branding', () => {
    render(Layout)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText(/Built with TemplateGen/i)).toBeDefined()
  })

  it('toggles mobile menu on click', async () => {
    render(Layout)
    const menuBtn = screen.getByLabelText(/Toggle navigation menu/i)
    expect(menuBtn).toBeDefined()

    await fireEvent.click(menuBtn)
    const links = screen.getAllByText('Docs')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})
