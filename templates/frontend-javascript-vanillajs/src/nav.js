import { themeManager } from './theme.js';

const sunIcon = `
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"></circle>
  <line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
  <line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

const moonIcon = `
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;

const menuIcon = `
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>`;

const closeIcon = `
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;

export function setupNavigation(container) {
  container.innerHTML = `
    <header class="nav-header">
      <div class="nav-container">
        <div class="brand">
          <div class="brand-badge">J</div>
          <span class="brand-title"><%= projectName %></span>
        </div>

        <nav class="desktop-nav">
          <a href="#" class="nav-link">Home</a>
          <a href="#docs" class="nav-link">Docs</a>
          <a href="#about" class="nav-link">About</a>
        </nav>

        <div class="mobile-controls">
          <button id="mobile-theme-toggle" class="theme-btn" aria-label="Toggle theme">
            ${themeManager.theme === 'light' ? moonIcon : sunIcon}
          </button>
          <button id="menu-btn" class="menu-btn" aria-label="Toggle navigation menu">
            ${menuIcon}
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="mobile-menu" style="display: none;">
        <a href="#" class="mobile-link">Home</a>
        <a href="#docs" class="mobile-link">Docs</a>
        <a href="#about" class="mobile-link">About</a>
      </div>
    </header>
  `;

  const mobileThemeBtn = container.querySelector('#mobile-theme-toggle');
  const menuBtn = container.querySelector('#menu-btn');
  const mobileMenu = container.querySelector('#mobile-menu');

  const updateIcons = (t) => {
    const icon = t === 'light' ? moonIcon : sunIcon;
    if (mobileThemeBtn) mobileThemeBtn.innerHTML = icon;
  };

  mobileThemeBtn?.addEventListener('click', () => {
    const next = themeManager.toggle();
    updateIcons(next);
  });

  menuBtn?.addEventListener('click', () => {
    if (mobileMenu) {
      const isHidden = mobileMenu.style.display === 'none';
      mobileMenu.style.display = isHidden ? 'flex' : 'none';
      if (menuBtn) menuBtn.innerHTML = isHidden ? closeIcon : menuIcon;
    }
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.style.display = 'none';
        if (menuBtn) menuBtn.innerHTML = menuIcon;
      }
    });
  });
}
