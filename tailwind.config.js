/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily : {
        'roboto' : ['Roboto', 'sans-serif']
      },
      boxShadow : {
        'btn' : '0 0 2px gray',
        'btn2' : '0 3px 5px -5px gray',
        'input' : '0 0 6px gray'
      },
      colors : {
        'pale-blue' : '#1a73e8',
        'dark-blue' : '#115ec3'
      },
      fontSize : {
        'smaller' : '.7rem'
      },
      width: {
        'xs' : '13rem',
        'sm' : '18rem'
      },
      minWidth : {
        'xsm' : '10rem',
        'sm' : '20rem',
        'base' : '24rem'
      }

    },
  },
  plugins: [],
}
