/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3b37ff",
          500: "#3b37ff",
          700: "#231eff",
        },
      },
    },
  },
  plugins: [],
};
