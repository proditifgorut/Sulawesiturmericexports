/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D97706', // amber-600
        'primary-dark': '#B45309', // amber-700
        'secondary': '#78350F', // amber-900
        'light': '#FEF3C7', // amber-100
        'dark': '#1F2937', // gray-800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
