/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'intro': "url('../assets/bg-home.png')"
      },
      backgroundColor: {
        '0078AA' : "#0078AA"
      },
      fontFamily: {
        'montserrat' : ['Montserrat']
      },
      height: {
        '675px' : "675px"
      }
    },
  },
  plugins: [],
}

