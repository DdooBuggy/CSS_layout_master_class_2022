const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATH_CLIENT_SCSS = "./src/scss/";

module.exports = {
  entry: {
    main: PATH_CLIENT_SCSS + "styles.scss",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  watch: true,
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
