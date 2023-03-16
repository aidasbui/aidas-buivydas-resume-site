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
    colors: {
      'color-primary': 'hsl(291,50%,10%)',
      'color-secondary': 'hsl(60,74%,50%)',
      'color-purple-800': 'hsl(287,15%,24%)',
      'color-purple-700': 'hsl(291,11%,47%)',
      'color-purple-600': 'hsl(288,15%,34%)',
      'color-purple-500': 'hsl(287,19%,67%)',
      'color-white': 'hsl(0,0%,98%)',
    },
    fontFamily: {
      sans: ['"JetBrains Mono"'],
      mono: ['"JetBrains Mono"', '"Noto Sans Mono"'],
    },
    fontSize: {
      sm: ['1rem', { lineHeight: '1.75' }],
      base: ['1.25rem', { lineHeight: '1.7' }],
      lg: ['1.56rem', { lineHeight: '1.64' }],
      xl: ['2rem', { lineHeight: '1.625' }],
      '2xl': ['2.56rem', { lineHeight: '1.59' }],
      '3xl': ['3.25rem', { lineHeight: '1.56' }],
    },
    extend: {},
  },
  plugins: [],
};
