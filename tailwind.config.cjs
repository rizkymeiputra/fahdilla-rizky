/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { script: "DM Serif Display" },
      colors: {
        tussock: {
          DEFAULT: "#C3883D",
          50: "#EEDEC9",
          100: "#EAD4BA",
          200: "#E0C19A",
          300: "#D6AE7B",
          400: "#CD9B5C",
          500: "#C3883D",
          600: "#996A2F",
          700: "#6E4C22",
          800: "#432F15",
          900: "#181107",
        },
      },
    },
    fontFamily: { sans: ["Jost"] },
  },
  plugins: [],
};
