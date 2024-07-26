/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mali: [
          "Cagliostro", "sans-serif"
        ],
        robo: [
          "Roboto", "sans-serif"
        ],
        inter: [
          "Inter", "sans-serif"
        ],
        roboto: [
          "Roboto", "sans-serif"
        ],
      },
      fontSize: {
        'custom-20': ['20px', '23.44px'],
        'custom-22': ['22px', '25.78px'],
        'custom-10': ['10px', '12.1px'],
        'unique-20': ['20px', '24.2px'],
        'custom-11': ['11px', '13.31px'],
        'custom 17': ['17px', '18px'],
        'custom-25': ['25px', '30.26px'],
        'custom-12': ['12px', '14.52px'],
        'unique-22': ['22px', '26.63px'],
        'custom-18': ['18px', '18px'],
      },
      letterSpacing: {
        '2%': '0.02em',
      },
      fontWeight: {
        '500': 500,
        '600': 600,
        '400': 400,
      },
      lineHeight: {
        '23.44px': '23.44px',
        '25.78px': '25.78px',
        '18px': '18px',
        '30.26px': '30.26px',
        '14.52px': '14.52px',
        '26.63px': '26.63px',
      },
      borderColor: {
        'custom-gray': '#5B5959',
        'custom-blue': '#004377',
        'custom-green': '#D9E4F7',
      },
      colors: {
        'custom-gray': '#5B5959',
        'unique-gray': '#8D8C8C',
      },
    },
  },
  plugins: [],
}

