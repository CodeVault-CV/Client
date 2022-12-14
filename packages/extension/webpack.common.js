const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const src = path.join(__dirname, "src");

module.exports = {
  entry: {
    background: path.join(src, 'background/index.ts'),
    "programmers-world": path.join(src, 'programmers/world/index.ts'),
    "programmers-isolated": path.join(src, 'programmers/isolated/index.ts'),
    "boj-world": path.join(src, "boj/world/index.ts"),
    "boj-isolated": path.join(src, "boj/isolated/index.ts")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
        },
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