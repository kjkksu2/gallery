const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "./dist") },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    client: { overlay: true },
    port: 3000,
    hot: true,
    open: true,
  },
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
