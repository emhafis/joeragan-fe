/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b72828",
        secondary: "#e5212f",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // font default
        montserrat: ["Montserrat", "sans-serif"], // optional alias
      },
    },
  },
  plugins: [],
}

