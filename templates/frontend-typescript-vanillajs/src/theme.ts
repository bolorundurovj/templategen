import { storage } from './storage';

export type Theme = 'light' | 'dark';

export class ThemeManager {
  private currentTheme: Theme;
  private listeners: ((theme: Theme) => void)[] = [];

  constructor() {
    this.currentTheme = storage.get<Theme>('app-theme', 'light');
    this.applyTheme(this.currentTheme);
  }

  get theme(): Theme {
    return this.currentTheme;
  }

  toggle(): Theme {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    storage.set('app-theme', this.currentTheme);
    this.notify();
    return this.currentTheme;
  }

  subscribe(listener: (theme: Theme) => void): () => void {
    this.listeners.push(listener);
    listener(this.currentTheme);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  private notify(): void {
    this.listeners.forEach((l) => l(this.currentTheme));
  }
}

export const themeManager = new ThemeManager();
