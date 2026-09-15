import { storage } from './storage.js';

export class ThemeManager {
  constructor() {
    this.currentTheme = storage.get('app-theme', 'light');
    this.listeners = [];
    this.applyTheme(this.currentTheme);
  }

  get theme() {
    return this.currentTheme;
  }

  toggle() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    storage.set('app-theme', this.currentTheme);
    this.notify();
    return this.currentTheme;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.currentTheme);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  applyTheme(theme) {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  notify() {
    this.listeners.forEach((l) => l(this.currentTheme));
  }
}

export const themeManager = new ThemeManager();
