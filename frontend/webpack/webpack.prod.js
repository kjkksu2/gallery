const path = require("path");
const glob = require("glob");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash:12].js",
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:12].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
        nodir: true,
      }),
    }),
  ],
});
