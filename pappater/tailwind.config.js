/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
    "./public/index.html", // Include this if your HTML files are in the public folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "10xl": "10rem", // 10xl -> 10rem
        "11xl": "12rem", // 11xl -> 12rem
        "12xl": "14rem", // 12xl -> 14rem
        "13xl": "16rem", // Add more sizes as needed
      },
    },
  },
  plugins: [],
};
