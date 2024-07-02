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
        ]
      },
      fontSize: {
        'custom-20': ['20px', '23.44px'],
        'custom-22': ['22px', '25.78px']
      },
      letterSpacing: {
        '2%': '0.02em',
      },
      fontWeight: {
        '500': 500,
        '600': 600,
      },
      lineHeight: {
        '23.44px': '23.44px',
        '25.78px': '25.78px',
        '18px': '18px',
      },
      borderColor: {
        'custom-gray': '#5B5959',
      },
      colors: {
        'custom-gray': '#5B5959',
        'unique-gray': '#8D8C8C',
      },
    },
  },
  plugins: [],
}

