const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader for JavaScript/JSX files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // path to your HTML template
      filename: "./index.html", // output filename
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // File extensions to resolve
  },
};

