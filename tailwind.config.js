/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF8354',
        secondary: '#5C4742',
        tertiary: '#D6CFCB',
        jet: '#39393A',
        bistre: '#3D2B1F',
        taupe: '#483C32',
        ash: '#C1B5A9',
        charcoal: "#2E4057",
        
      },
    },
  },
  plugins: [],
}