/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#543e2f',
        secondary: '#f4dccd',
        accent: '#c96b2c',
        background: '#fbf3ee',

        // primary: '#ffb05e',
        // secondary: '#D4E0F7',
        // accent: '#0B224C',
        background: '#FEFDFB',
        // background_dark: '#080502',
        // background: '#E0E9FA',

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
      fontFamily: {
        'oswald': ['OSWALD', 'sans-serif'],
        'marcellus': ['MARCELLUS', 'sans-serif'],
        'dmsans': ['DMSANS', 'sans-serif'],
      },
      fontWeight: {
        thicc: '900',
      },
    },
  },
  plugins: [],
}