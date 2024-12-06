/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'Mycontainer': '1170px',
      },
      colors: {
        grencolor: '#4ead5a',
        commoncolor: '#232333',
        primarycolor: '#191b1f',
        yellowcolor: '#fbbd46',
        customgreen: '#4ead5a',
        graycustom: "#191b1f",
        orangetxt: '#fcd384',
        orangebgsec: '#fef2da',
        tailoredtxt2: '#405A69',
        greencolor: '#00DEA3',
        darkreddcolor: '#F23985',
        paragraph: '#414141',
        tailoredheading: '#191919',
        bgclient:'#eef7fb',
      },
      fontSize: {
        'size22': '22px',
        'size30': '30px',
        'size40': '40px',
      },
      borderRadius: {
        'radius40': '40px',

      },
      inset: {
        '100': '100%', // Adds `top-100` class for top: 100%
      },
      fontFamily: {
        body: ['averta-regularuploaded_file', 'Arial', 'sans-serif'],
        normal: ['averta-regularuploaded_file', 'Arial', 'sans-serif'],
        semibold: ['averta-semibolduploaded_file', 'Arial', 'sans-serif'],
        bold: ['averta-bolduploaded_file', 'Arial', 'sans-serif'],
        autograph: ['autographyregular'],
      },
    },
  },
  plugins: [],
}

