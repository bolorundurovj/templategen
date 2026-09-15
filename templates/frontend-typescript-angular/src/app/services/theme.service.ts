import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', current);
        if (current === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        try {
          localStorage.setItem('app-theme', current);
        } catch {
          // Ignore storage errors
        }
      }
    });
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('app-theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'light';
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }
}
