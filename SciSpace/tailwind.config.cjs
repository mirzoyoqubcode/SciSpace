/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#946cee",
        secondary: "#e9e9e9",
      },
    },
  },
  plugins: [],
};
