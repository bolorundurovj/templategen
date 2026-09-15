<script setup>
defineProps({
  theme: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['toggle']);
</script>

<template>
  <button
    type="button"
    class="theme-toggle-btn"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
    @click="emit('toggle')"
  >
    <svg v-if="theme === 'light'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color, #e2e8f0);
  background: var(--card-bg, #ffffff);
  color: var(--text-primary, #0f172a);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.theme-toggle-btn:hover {
  background: var(--hover-bg, #f1f5f9);
}
.icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
