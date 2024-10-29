/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'londrina': ['Londrina Solid', 'sans-serif']
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [],
}
