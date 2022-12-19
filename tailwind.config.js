/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        xs: "0 0 2px gray",
        '3xl': "0 3px 5px -5px gray",
        '4xl': "0 0 6px gray",
      },
      colors: {
        paleblue: "#1a73e8",
        darkblue: "#115ec3",
      },
      fontSize: {
        smaller: ".7rem",
      },
      minWidth: {
        xsm: "10rem",
        sm: "20rem",
        base: "24rem",
      },
      borderRadius: {
        '4xl': ".25rem",
      },
    },
  },
  plugins: [],
};
