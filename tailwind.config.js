/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E30102",
        lightBackground: "#F5F5F5",
        mutedText: "#606269",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
