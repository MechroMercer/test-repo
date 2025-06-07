import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import date-fns from '@date-fns/vite'
export default defineConfig({
  base: '/test-repo/',
  plugins: [tailwindcss()],
});
