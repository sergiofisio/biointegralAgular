/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors:{
      "blue":"#007AFF",
      "gray":"#696969",
      "black":"#000000",
      "white":"#FFFFFF",
    },
    fontFamily:{
      'manroge': ['Manrope', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'capa': "url('/assets/site/capa.svg')",
      }
    },
  },
  plugins: [],
};
