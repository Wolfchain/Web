// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    colors: {
        ...colors,
        'crimson': "#fb3449",
        'lightcoral': "#fa6e7d",
        'wolfblue': "#2951e3", //"#2166c1",
        'blackback': "#0f0e13",
        "deeppink": "#eb1584",
        "palegreen": "#80ffa8",
        gray: colors.trueGray,
      },
      extend: {
        boxShadow: {
          'offset-black-none': '0px 0px black',
          'offset-black': '2px 2px black',
          'offset-black-xl': '10px 10px black',
          'offset-crimson': '2px 2px #fb3449',
        },
        fontFamily: {
          'rubik': ['"Rubik"', 'sans-serif'],
          'noto': ['"Noto Sans"', 'sans-serif'],
        },
      },
  },
  variants: {},
};