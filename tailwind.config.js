/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkColor: "#3d3d3d",
        darkColor2: "#2c2c2c",
        lightColor: "#fefae0",
        blueColor: "#90e0ef",
        bgColor: "rgba(0, 0, 0, 0.85)",
        bgColor2: "rgba(0, 0, 0, 0.8)",
        bgColor3: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
