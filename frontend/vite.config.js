/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

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
    define: {
      'process.env.PROD': `"${process.env.NODE_ENV === 'development' ? 'false' : 'true'}"`,
      'process.env.VITE_API_BASE_URL': `"${process.env.VITE_API_BASE_URL}"`,
    },
  };
});
