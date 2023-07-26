/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#884A39',
        secondary: '#C38154',
        tertiary: '#FFC26F',
        quartery: '#F9E0BB',
        jet: '#39393A',
        bistre: '#3D2B1F',
        taupe: '#483C32',
        ash: '#C1B5A9',
        charcoal: "#2E4057",
        c1: "#EF8354",
        c2: "#5C4742",
        c3: "#D6CFCB",
        c4: "#F9E0BB",
      },
    },
  },
  plugins: [],
}