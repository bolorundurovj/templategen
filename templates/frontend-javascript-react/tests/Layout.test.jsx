import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Layout } from '../src/components/Layout'

describe('Layout Component', () => {
  it('renders navigation, children content, and footer', () => {
    render(
      <Layout>
        <div data-testid="test-content">Main Content Area</div>
      </Layout>,
    )

    expect(screen.getByTestId('test-content')).toBeDefined()
    expect(screen.getByText(/Home/i)).toBeDefined()
    expect(screen.getByText(/Built with TemplateGen/i)).toBeDefined()
  })

  it('toggles mobile menu on button click', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>,
    )

    const menuButton = screen.getByLabelText(/Toggle navigation menu/i)
    expect(menuButton).toBeDefined()

    fireEvent.click(menuButton)
    const links = screen.getAllByText(/Docs/i)
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})
