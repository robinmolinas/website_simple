import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',

  plugins: [react()],

  resolve: {
    alias: {
      // Enables clean imports: import X from '@/types/project'
      // instead of:           import X from '../../types/project'
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    // Raise the chunk size warning threshold slightly — framer-motion is large by design.
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code from app code for better browser cache utilisation.
        // - 'vendor-react'   → React + ReactDOM (rarely changes)
        // - 'vendor-motion'  → Framer Motion (rarely changes)
        // - 'index'          → your app code (changes on every deploy)
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
        },
      },
    },
  },
});
