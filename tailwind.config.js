/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        "BlackColor": "linear-gradient(90deg, #3A3A3A -14.96%, #000000 100%)",
        "BgColor": "rgba(245, 245, 245, 1)",
        "GreenColor": "rgba(32, 206, 148, 1)",
        "GreenColor2": "rgba(43, 190, 141, 0.15)",
        "ActiveColor": "rgba(61, 32, 206, 1)",
        "CardGray": "rgba(220, 222, 227, 1)",
      },
      fontFamily: {
        Text: 'Mail Sans Roman',
      }
    },
  },
  plugins: [],
}

