const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const src = path.join(__dirname, "src");

module.exports = {
  entry: {
    background: path.join(src, 'background/index.ts'),
    programmers: path.join(src, 'programmers/index.ts'),
    boj: path.join(src, "boj/index.ts")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "..", context: "public" }],
      options: {},
    }),
  ],
};