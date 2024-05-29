/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mali: [
          "Cagliostro","sans-serif" 
        ],
        robo: [
           "Roboto", "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}

