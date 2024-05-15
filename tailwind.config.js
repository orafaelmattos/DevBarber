/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.svg')",
        "services": "url('/assets/fundo2.jpg')"
      }
    },
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}
