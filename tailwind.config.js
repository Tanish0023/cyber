/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: [
          "Roboto",     // Custom Roboto font
          "sans-serif", // Fallback to sans-serif if Roboto is unavailable
        ],
      },
    },
  },
  plugins: [],
}