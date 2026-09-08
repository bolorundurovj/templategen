import { defineConfig } from 'vite'

export default defineConfig({
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
