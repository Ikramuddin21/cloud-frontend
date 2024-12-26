// vite.config.js
const { resolve } = require("path");
import tailwindcss from "tailwindcss";

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: resolve("index.html"),
        view: resolve("view.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
};
