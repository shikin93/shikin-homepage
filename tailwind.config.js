const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
      colors: {
        background: '#F1F6F9',
        accentSoft: '#FF6E31',
        font: '#16213E',
        accentDark: '#8CC0DE',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}