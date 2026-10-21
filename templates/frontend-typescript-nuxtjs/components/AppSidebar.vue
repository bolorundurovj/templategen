<% if (layout !== 'sidenav') { %>_SKIP_FILE_<% } else { %>
<script setup lang="ts">
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import { useTheme } from '../composables/useTheme';
import { useView } from '../composables/useView';

const { theme, toggleTheme } = useTheme();
const { currentView, setView } = useView();

const mobileMenuOpen = ref(false);
const navLinks = [
  { label: 'Home', href: '#', view: 'home' as const },
  <% if (isFullstack) { %>{ label: 'Items', href: '#/items', view: 'items' as const },<% } %>
  { label: 'Docs', href: '#docs' },
  { label: 'About', href: '#about' },
];

const onLinkClick = (link: { label: string; href: string; view?: 'home' | 'items' }, event: MouseEvent) => {
  if (link.view) {
    event.preventDefault();
    setView(link.view);
  }
};
</script>

<template>
  <aside class="sidebar">
    <div>
      <div class="brand">
        <div class="brand-badge">T</div>
        <div class="brand-text">
          <span class="brand-title"><%= projectName %></span>
          <span class="brand-subtitle">Sidebar Navigation</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="sidebar-link"
          :class="{ active: link.view && currentView === link.view }"
          @click="onLinkClick(link, $event)"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>

    <div class="sidebar-footer">
      <span class="sidebar-footer-label">Theme</span>
      <ThemeToggle :theme="theme" @toggle="toggleTheme" />
    </div>
  </aside>

  <header class="mobile-header">
    <div class="mobile-bar">
      <div class="brand">
        <div class="brand-badge">T</div>
        <span class="brand-title"><%= projectName %></span>
      </div>

      <div class="mobile-controls">
        <ThemeToggle :theme="theme" @toggle="toggleTheme" />
        <button
          type="button"
          class="menu-btn"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="mobileMenuOpen" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="mobile-link"
        :class="{ active: link.view && currentView === link.view }"
        @click="onLinkClick(link, $event); mobileMenuOpen = false"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<style scoped>
.sidebar {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 16rem;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 1.5rem;
  border-right: 1px solid var(--border-color, #e2e8f0);
  background: var(--nav-bg, rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(8px);
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
  flex-shrink: 0;
}
.brand-text {
  display: flex;
  flex-direction: column;
}
.brand-title {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary, #0f172a);
}
.brand-subtitle {
  font-size: 0.75rem;
  font-family: monospace;
  color: var(--text-secondary, #64748b);
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1.5rem;
}
.sidebar-link {
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary, #64748b);
  text-decoration: none;
  transition: background-color 0.15s, color 0.15s;
}
.sidebar-link:hover,
.sidebar-link.active {
  background: var(--hover-bg, #f1f5f9);
  color: #0d9488;
}
[data-theme="dark"] .sidebar-link:hover,
[data-theme="dark"] .sidebar-link.active,
.dark .sidebar-link:hover,
.dark .sidebar-link.active {
  color: #2dd4bf;
}
.sidebar-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color, #e2e8f0);
}
.sidebar-footer-label {
  font-size: 0.75rem;
  color: var(--text-secondary, #64748b);
}
.mobile-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
  background: var(--nav-bg, rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(8px);
}
.mobile-bar {
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}
.mobile-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
@media (min-width: 768px) {
  .sidebar {
    display: flex;
  }
  .mobile-header {
    display: none !important;
  }
}
.menu-btn {
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
.mobile-link.active {
  color: #0d9488;
}
[data-theme="dark"] .mobile-link.active,
.dark .mobile-link.active {
  color: #2dd4bf;
}
</style>
<% } %>
