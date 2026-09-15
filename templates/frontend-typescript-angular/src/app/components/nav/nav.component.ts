import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <header class="nav-header">
      <div class="nav-container">
        <div class="brand">
          <div class="brand-badge">T</div>
          <span class="brand-title"><%= projectName %></span>
        </div>

        <nav class="desktop-nav">
          <a href="#" class="nav-link">Home</a>
          <a href="#docs" class="nav-link">Docs</a>
          <a href="#about" class="nav-link">About</a>
          <button class="theme-btn" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
            @if (themeService.theme() === 'light') {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            } @else {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            }
          </button>
        </nav>

        <div class="mobile-controls">
          <button class="theme-btn" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
            @if (themeService.theme() === 'light') {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            } @else {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            }
          </button>
          <button class="menu-btn" (click)="toggleMobileMenu()" aria-label="Toggle navigation menu">
            @if (mobileMenuOpen()) {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            } @else {
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            }
          </button>
        </div>
      </div>

      @if (mobileMenuOpen()) {
        <div class="mobile-menu">
          <a href="#" (click)="mobileMenuOpen.set(false)" class="mobile-link">Home</a>
          <a href="#docs" (click)="mobileMenuOpen.set(false)" class="mobile-link">Docs</a>
          <a href="#about" (click)="mobileMenuOpen.set(false)" class="mobile-link">About</a>
        </div>
      }
    </header>
  `,
  styles: [`
    .nav-header {
      position: sticky;
      top: 0;
      z-index: 50;
      width: 100%;
      border-bottom: 1px solid var(--border-color, #e2e8f0);
      background: var(--nav-bg, rgba(255, 255, 255, 0.85));
      backdrop-filter: blur(8px);
    }
    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .brand-badge {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      background: #0d9488;
      color: white;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-title {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--text-primary, #0f172a);
    }
    .desktop-nav {
      display: none;
      align-items: center;
      gap: 1.5rem;
    }
    .mobile-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    @media (min-width: 768px) {
      .desktop-nav {
        display: flex;
      }
      .mobile-controls {
        display: none;
      }
    }
    .nav-link {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-secondary, #64748b);
      text-decoration: none;
      transition: color 0.15s;
    }
    .nav-link:hover {
      color: #0d9488;
    }
    .theme-btn, .menu-btn {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--border-color, #e2e8f0);
      background: var(--card-bg, #ffffff);
      color: var(--text-primary, #0f172a);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      width: 1.25rem;
      height: 1.25rem;
    }
    .mobile-menu {
      border-top: 1px solid var(--border-color, #e2e8f0);
      background: var(--bg-color, #ffffff);
      padding: 0.75rem 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .mobile-link {
      color: var(--text-primary, #0f172a);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
    }
  `],
})
export class NavComponent {
  readonly themeService = inject(ThemeService);
  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }
}
