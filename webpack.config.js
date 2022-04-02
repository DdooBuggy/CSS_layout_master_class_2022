const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATH_FROM_HORROR = "./src/horror/styles.scss";
const PATH_TO_HORROR = "horror/styles.css";
const PATH_FROM_PAINTBOX = "./src/paint_box/styles.scss";
const PATH_TO_PAINTBOX = "paint_box/styles.css";

module.exports = {
  entry: {
    main: PATH_FROM_PAINTBOX,
  },
  output: {
    path: path.resolve(__dirname, "assets"),
  },
  watch: true,
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: PATH_TO_PAINTBOX,
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
