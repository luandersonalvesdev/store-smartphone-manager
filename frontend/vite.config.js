/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      port: 3000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.js',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        provider: 'v8',
      },
    },
  };
});
