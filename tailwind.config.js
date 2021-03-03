 // tailwind.config.js
 module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {},
     plugins: [],
   }

   // tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      cyan: colors.cyan,
    }
  }
}

console.log("script ran");