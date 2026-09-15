<script setup lang="ts">
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import { Theme } from '../composables/useTheme';

defineProps<{
  theme: Theme;
}>();

const emit = defineEmits<{
  (e: 'toggleTheme'): void;
}>();

const mobileMenuOpen = ref(false);
const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Docs', href: '#docs' },
  { label: 'About', href: '#about' },
];
</script>

<template>
  <header class="nav-header">
    <div class="nav-container">
      <div class="brand">
        <div class="brand-badge">T</div>
        <span class="brand-title"><%= projectName %></span>
      </div>

      <nav class="desktop-nav">
        <a v-for="link in navLinks" :key="link.label" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
        <ThemeToggle :theme="theme" @toggle="emit('toggleTheme')" />
      </nav>

      <div class="mobile-controls">
        <ThemeToggle :theme="theme" @toggle="emit('toggleTheme')" />
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
        @click="mobileMenuOpen = false"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<style scoped>
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
.mobile-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
</style>
