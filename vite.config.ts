import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` defaults to "/". The GitHub Pages workflow sets BASE_PATH to "/<repo-name>/".
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
