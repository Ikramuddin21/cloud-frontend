// vite.config.js
// const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        view: "view.html",
      },
    },
  },
};
