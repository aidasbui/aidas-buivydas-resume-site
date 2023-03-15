    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class',
      theme: {
      fontFamily: {
      'sans': ['JetBrains Mono', 'sans-serif'],
      'mono': ['VT323', 'sans-serif'],
    },
     extend: {},
     },
    plugins: [],
   }