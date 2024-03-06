/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const env = {
    'process.env.VITE_APP_BASE_URL': process.env.VITE_APP_BASE_URL,
  };

  return {
    plugins: [react(), tailwindcss(), replace({ ...env })],
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
