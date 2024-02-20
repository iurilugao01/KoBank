const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    transactions: "./src/js/transactionList.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  mode: "development",
};
