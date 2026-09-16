import { defineConfig } from 'vite';
export default defineConfig({
    // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/e2e/**'],
  },
});
//# sourceMappingURL=vite.config.js.map