/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        '18': '18px',
      },
      fontWeight: {
        '600': 600,
      },
      lineHeight: {
        '23': '23px',
      },
    },
  },
  plugins: [],
}