<% if (layout === 'sidenav') { %>_SKIP_FILE_<% } else { %>
import { themeManager } from './theme.js';
import { sunIcon, moonIcon, menuIcon, closeIcon } from './icons.js';

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
          <% if (isFullstack) { %><a href="#/items" class="nav-link">Items</a><% } %>
          <a href="#docs" class="nav-link">Docs</a>
          <a href="#about" class="nav-link">About</a>
          <button id="theme-toggle" class="theme-btn" aria-label="Toggle theme">
            ${themeManager.theme === 'light' ? moonIcon : sunIcon}
          </button>
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
        <% if (isFullstack) { %><a href="#/items" class="mobile-link">Items</a><% } %>
        <a href="#docs" class="mobile-link">Docs</a>
        <a href="#about" class="mobile-link">About</a>
      </div>
    </header>
  `;

  const themeBtn = container.querySelector('#theme-toggle');
  const mobileThemeBtn = container.querySelector('#mobile-theme-toggle');
  const menuBtn = container.querySelector('#menu-btn');
  const mobileMenu = container.querySelector('#mobile-menu');

  const updateIcons = (t) => {
    const icon = t === 'light' ? moonIcon : sunIcon;
    if (themeBtn) themeBtn.innerHTML = icon;
    if (mobileThemeBtn) mobileThemeBtn.innerHTML = icon;
  };

  const handleToggleTheme = () => {
    const next = themeManager.toggle();
    updateIcons(next);
  };

  themeBtn?.addEventListener('click', handleToggleTheme);
  mobileThemeBtn?.addEventListener('click', handleToggleTheme);

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
<% } %>
