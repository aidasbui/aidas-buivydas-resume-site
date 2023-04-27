// import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import svg from 'vite-plugin-svgo';
import svgr from 'vite-plugin-svgr';
// import webfontDownload from 'vite-plugin-webfont-dl';

//TODO: fix FOUT

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    eslint({ fix: true }),
    Unfonts({
      // Google Fonts API V2
      google: {
        /**
         * enable preconnect link injection
         *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
         * default: true
         */
        preconnect: false,

        /**
         * values: auto, block, swap(default), fallback, optional
         * default: 'swap'
         */
        display: 'block',

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',

        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          'Source Sans Pro',

          // or objects
          {
            /**
             * Family name (required)
             */
            name: 'VT323',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
          {
            /**
             * Family name (required)
             */
            name: 'JetBrains Mono',

            /**
             * Family styles
             */
            styles: 'wght@400;700',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ],
      },
    }),
    // webfontDownload(
    //   [
    //     'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
    //     'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap',
    //     'https://fonts.googleapis.com/css2?family=VT323&display=swap',
    //   ],
    //   {
    //     injectAsStyleTag: false,
    //   },
    // ),
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
