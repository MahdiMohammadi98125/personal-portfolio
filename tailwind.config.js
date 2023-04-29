/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "dark-1": "#111",
        "dark-2": "#222",
        "dark-3": "#333",
        "dark-4": "#444",
        "dark-5": "#AAA",
      },
    },
  },
  plugins: [],
};
