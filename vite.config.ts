import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manifesto: resolve(__dirname, 'worth-building.html'),
      },
    },
  },
});
