/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const Class = plugin(function({ addUtilities }) {
  addUtilities({
    ".marker-before": {
      content: "''",
      position: 'absolute',
      top: '-10px',
      left: '15%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '40px',
      background: '#5da6ff',
      boxShadow: '0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff, 0 0 60px #5da6ff',
      borderRadius: '8px'
    }
  })
})

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "Raleway",
      },
    },
  },
  plugins: [Class],
}
