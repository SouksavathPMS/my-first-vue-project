/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Fixed typo here
      },
      gridTemplateColumns: {
        '70/30': '70% 30%', // Ensure this percentage adds up to 100% for proper layout
      },
    },
  },
  plugins: [],
};
