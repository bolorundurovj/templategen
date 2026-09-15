import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Layout } from '../components/Layout';

describe('Layout Component', () => {
  it('renders navigation, children, and footer', () => {
    render(
      <Layout>
        <div data-testid="child-content">Next.js Page Content</div>
      </Layout>,
    );

    expect(screen.getByTestId('child-content')).toBeDefined();
    expect(screen.getByText(/Home/i)).toBeDefined();
    expect(screen.getByText(/Built with TemplateGen/i)).toBeDefined();
  });

  it('toggles mobile menu on button click', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>,
    );

    const menuButton = screen.getByLabelText(/Toggle navigation menu/i);
    expect(menuButton).toBeDefined();

    fireEvent.click(menuButton);
    const links = screen.getAllByText(/Docs/i);
    expect(links.length).toBeGreaterThanOrEqual(1);
  });
});
