const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        CLIENT_CONFIG: JSON.stringify(process.env.CLIENT_CONFIG),
      },
    }),
  ],
};
