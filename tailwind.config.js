const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "1400px",
      },
    },
    extend: {
      fontFamily: {
        "adorn-condensed-sans": ["Adorn Condensed Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
