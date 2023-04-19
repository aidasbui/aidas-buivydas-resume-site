// import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import svg from 'vite-plugin-svgo';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        app: './public/index.html',
      },
    },
    outDir: '../dist',
  },
  plugins: [
    react(),
    eslint({ fix: true }),
    webfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap',
        'https://fonts.googleapis.com/css2?family=VT323&display=swap',
      ],
      {
        injectAsStyleTag: false,
      },
    ),
    svgr(),
    svg(),
  ],
  resolve: {
    alias: {
      assets: `${__dirname}/src/assets`,
      components: `${__dirname}/src/components`,
      constants: `${__dirname}/src/constants`,
      context: `${__dirname}/src/context`,
      hooks: `${__dirname}/src/hooks`,
      pages: `${__dirname}/src/pages`,
      routes: `${__dirname}/src/routes`,
      styles: `${__dirname}/src/styles`,
      types: `${__dirname}/src/types`,
      utils: `${__dirname}/src/utils`,
    },
  },
  define: {
    'process.env': process.env,
  },
});
