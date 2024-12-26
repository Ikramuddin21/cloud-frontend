// vite.config.js
// const { resolve } = require("path");
import tailwindcss from "tailwindcss";

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        view: "view.html",
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
};
