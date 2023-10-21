/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'intro': "url('../assets/bg1.png')"
      },
      fontSize: {
        '230px' : "230px"
      },
      backgroundColor: {
        '0078AA' : "#0078AA"
      },
      fontFamily: {
        'montserrat' : ['Montserrat']
      },
      height: {
        '700px' : "700px"
      }
    },
  },
  plugins: [],
}

