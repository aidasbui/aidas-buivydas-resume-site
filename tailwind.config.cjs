/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        jetbrainsMono: ['var(--font-jetBrainsMono'],
        vt323: ['var(--font-vt323)'],
      },
      colors: {
        'color-primary': 'hsl(291,50%,10%)',
        'color-secondary': 'hsl(60,74%,50%)',
        'color-purple-800': 'hsl(287,15%,24%)',
        'color-purple-700': 'hsl(291,11%,47%)',
        'color-purple-600': 'hsl(288,15%,34%)',
        'color-purple-500': 'hsl(287,19%,60%)',
        'color-white': 'hsl(0,0%,98%)',
      },
      backgroundImage: {
        'aidas-bui-photo': "url('./src/assets/images/aidas-buivydas.jpeg')",
        'background-noise': "url('./src/assets/images/background-noise.svg')",
      },
    },
  },
  plugins: [],
};
