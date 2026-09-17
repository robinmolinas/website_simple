import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
});
