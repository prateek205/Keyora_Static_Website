/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        keyora: {
          dark: "#171717",
          black: "#101010",
          cream: "#F5F3EE",
          accent: "#B99B70",
          muted: "#88847D",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
