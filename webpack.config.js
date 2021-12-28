const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssWebpackPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    //   splitChunks: {
    //     chunks: "all",
    //   },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const fileName = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["./main/app.ts", "./main/styles.less"],
    menu: ["./menu/app.ts", "./menu/styles-menu.less"],
  },
  output: {
    filename: fileName("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".less"],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./main/index.html",
      filename: "index.html",
      chunks: ["main"],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "menu.html",
      template: "./menu/menu.html",
      chunks: ["menu"],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/main/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
        {
          from: path.resolve(__dirname, "./src/menu/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: fileName("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      { test: /\.(png|jpg|svg|gif)$/, use: ["file-loader"] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "../fonts",
        },
      },
    ],
  },
};
