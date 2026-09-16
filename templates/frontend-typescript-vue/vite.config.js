import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: ['**/node_modules/**', '**/e2e/**'],
    },
});
//# sourceMappingURL=vite.config.js.map