const Dotenv = require("dotenv-webpack");

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
    new Dotenv({
      path: `${__dirname}/.env`,
    }),
  ],
};
