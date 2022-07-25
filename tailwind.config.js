/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
   require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
