/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#171A30",
        secondary: "#1D2239",
        text_color: "#919DB9",
        input_border: "#313A6C",
      },
    },
  },
  plugins: [],
};
