module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#D87D4A',
        'light-orange': '#FBAF85',
        'almost-white': '#FAFAFA',
        'gray-white': '#F1F1F1',
        'almost-black': '#101010',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
