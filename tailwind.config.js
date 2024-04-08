/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          '000': '#e7dbbe',
          '001': '#eeb63f'
        },
        gray: {
          '000': '#e5e5e5',
        },
      },
    },
  },
  plugins: [],
}