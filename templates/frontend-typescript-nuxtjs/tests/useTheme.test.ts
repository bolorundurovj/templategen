import { describe, it, expect, beforeEach } from 'vitest';
import { useTheme } from '../composables/useTheme';

describe('useTheme in Nuxt', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
  });

  it('initializes with light theme by default', () => {
    const { theme } = useTheme();
    expect(theme.value).toBe('light');
  });

  it('toggles theme to dark and light', () => {
    const { theme, toggleTheme } = useTheme();
    toggleTheme();
    expect(theme.value).toBe('dark');

    toggleTheme();
    expect(theme.value).toBe('light');
  });
});
