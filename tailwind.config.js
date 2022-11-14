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
      }

    },
  },
  plugins: [],
}
