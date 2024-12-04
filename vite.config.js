import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/My-portfolio/",
  css: {
    postcss: './postcss.config.js',
  },
});
