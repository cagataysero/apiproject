/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        searchBarWidth: "700px",
        container: "1400px",
      },
      colors: {
        navbar: "#2E2E2E",
        logo: "#B46060",
      },
    },
  },
  plugins: [],
};
