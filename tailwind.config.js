/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      pro: ['SF Pro Text', 'sans-serif']
    },
    colors: {
      inputBack: 'rgba(224, 231, 255, 0.2)',
      placeholder: 'rgba(46, 56, 77, 0.35)',
      filterColor: 'rgba(51, 102, 255, 0.6)'
    }
  },
  plugins: [],
}
