// import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import svg from 'vite-plugin-svgo';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './public/index.html',
      },
    },
    outDir: '../dist',
  },
  plugins: [react(), eslint({ fix: true }), webfontDownload(), svgr(), svg()],
});
