import { defineConfig } from 'vite';

// Static onboarding site. Vite serves index.html as the entry by default.
// Port 5174 so it can run alongside the landing site (5173) without clashing.
export default defineConfig({
  base: './',
  server: {
    port: 5174,
    open: '/',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssMinify: true,
    minify: 'esbuild',
  },
});
