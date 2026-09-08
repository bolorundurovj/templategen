<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const increment = (): void => {
  count.value++
}
</script>

<template>
  <div class="app-container">
    <div class="hero">
      <div class="badge">TemplateGen Starter</div>
      <h1 class="title">Welcome to <%= projectName %></h1>
      <p class="subtitle">
        You've successfully scaffolded a modern Nuxt.js + TypeScript application.
        Start editing <code class="code">app/app.vue</code> to see changes instantly.
      </p>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="icon-wrap">
          <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">Interactive Counter</h3>
          <p class="card-desc">Test out Nuxt fullstack reactivity.</p>
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

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  color: #0f172a;
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
.title {
  font-size: 3rem;
  font-weight: 800;
  color: #0f766e;
  margin: 0 0 1rem;
}
.subtitle {
  font-size: 1.125rem;
  color: #475569;
  max-width: 38rem;
  margin: 0 auto;
}
.code {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  color: #0f766e;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
}
.card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
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
  background-color: #f0fdfa;
  padding: 0.75rem;
  border-radius: 0.5rem;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #0d9488;
}
.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
}
.card-desc {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #64748b;
}
.button-wrap {
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
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
</style>
