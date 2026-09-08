import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('renders welcome message and starter info', () => {
    render(<App />);
    expect(screen.getByText(/TemplateGen Starter/i)).toBeDefined();
    expect(screen.getByText(/Interactive Counter/i)).toBeDefined();
  });

  it('initializes counter at 0 and increments on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Count is 0/i });
    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeDefined();

    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /Count is 2/i })).toBeDefined();
  });
});
