import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeManager } from '../src/theme';

describe('ThemeManager', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.className = '';
  });

  it('initializes with default light theme', () => {
    const manager = new ThemeManager();
    expect(manager.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('toggles theme between light and dark', () => {
    const manager = new ThemeManager();
    expect(manager.theme).toBe('light');

    const next = manager.toggle();
    expect(next).toBe('dark');
    expect(manager.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    const reverted = manager.toggle();
    expect(reverted).toBe('light');
    expect(manager.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('notifies subscribers on change', () => {
    const manager = new ThemeManager();
    const calls: string[] = [];
    const unsubscribe = manager.subscribe((theme) => {
      calls.push(theme);
    });

    expect(calls).toEqual(['light']);

    manager.toggle();
    expect(calls).toEqual(['light', 'dark']);

    unsubscribe();
    manager.toggle();
    expect(calls).toEqual(['light', 'dark']);
  });
});
