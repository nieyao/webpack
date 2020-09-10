const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveCommentsPlugin = require("./ remove-comments-plugin");

/** @type {import('webpack').Configuration} */
const config = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      template: "./index.html",
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename: "about.html",
    }),
    new RemoveCommentsPlugin(),
  ],
};

module.exports = config;
