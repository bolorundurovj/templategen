<script setup lang="ts">
import AppLayout from './components/AppLayout.vue';
import { useLocalStorage } from './composables/useLocalStorage';
import { useView } from './composables/useView';
<% if (isFullstack) { %>import ItemsCrud from './components/ItemsCrud.vue';<% } %>

const { currentView, setView } = useView();
const count = useLocalStorage<number>('app-count', 0);
const increment = (): void => {
  count.value++;
};
</script>

<template>
  <AppLayout>
    <div v-if="currentView === 'items'" class="items-page">
      <div class="page-top-bar">
        <a href="#" class="back-link" @click.prevent="setView('home')">&larr; Back to Home</a>
        <div class="badge">Fullstack CRUD</div>
      </div>
      <% if (isFullstack) { %>
      <ItemsCrud />
      <% } %>
    </div>
    <template v-else>
      <div class="hero">
        <div class="badge">TemplateGen Starter</div>
        <h1 class="title">Welcome to <%= projectName %></h1>
        <p class="subtitle">
          You've successfully scaffolded a modern Nuxt.js + TypeScript application with theming and responsive navigation.
          Start editing <code class="code">app.vue</code> to see changes instantly.
        </p>
      </div>

      <div class="cards-container">
        <div class="card">
          <div class="card-header">
            <div class="icon-wrap">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="card-title">Interactive Counter</h3>
              <p class="card-desc">Persisted in localStorage with Nuxt reactivity.</p>
            </div>
          </div>

          <div class="button-wrap">
            <button class="btn" @click="increment">
              Count is {{ count }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style>
.cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .cards-container {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
}
:root {
  --bg-color: #f8fafc;
  --bg-secondary: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --card-bg: #ffffff;
  --border-color: #e2e8f0;
  --nav-bg: rgba(255, 255, 255, 0.85);
  --hover-bg: #f1f5f9;
  color-scheme: light;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

[data-theme="dark"],
.dark {
  --bg-color: #020617;
  --bg-secondary: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --card-bg: #0f172a;
  --border-color: #1e293b;
  --nav-bg: rgba(15, 23, 42, 0.85);
  --hover-bg: #1e293b;
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-primary);
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}
.badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  margin-bottom: 1rem;
  border-radius: 9999px;
  background-color: #ccfbf1;
  color: #115e59;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
}
[data-theme="dark"] .badge,
.dark .badge {
  background-color: rgba(13, 148, 136, 0.25);
  color: #5eead4;
}
.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #0f766e;
  margin: 0 0 1rem;
}
[data-theme="dark"] .title,
.dark .title {
  color: #2dd4bf;
}
.subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary, #475569);
  max-width: 38rem;
  margin: 0 auto;
}
.code {
  background-color: var(--card-bg, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  color: #0f766e;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
}
[data-theme="dark"] .code,
.dark .code {
  color: #2dd4bf;
}
.card {
  background-color: var(--card-bg, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 28rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.icon-wrap {
  background-color: rgba(13, 148, 136, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #0d9488;
}
[data-theme="dark"] .icon,
.dark .icon {
  color: #2dd4bf;
}
.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary, #1e293b);
}
.card-desc {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--text-secondary, #64748b);
}
.button-wrap {
  padding-top: 1rem;
  border-top: 1px solid var(--border-color, #f1f5f9);
}
.btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #0d9488;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn:hover {
  background-color: #0f766e;
}

.items-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
}

.page-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.back-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #0d9488;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

[data-theme="dark"] .back-link,
.dark .back-link {
  color: #2dd4bf;
}
</style>
