const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
