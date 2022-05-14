const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")
const dotenv = require("dotenv")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development"
  if (isDevelopment) {
    dotenv.config({ path: ".env.development" })
  } else {
    dotenv.config()
  }

  return {

    mode: argv.mode,
    devtool: isDevelopment ? "source-map" : false,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "public",
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/manifest.json", to: "public/manifest.json" },
          { from: "public/assets/images/*", to: "" },
        ],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        hash: true,
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 3000,
      hot: true,
      historyApiFallback: true,
      liveReload: true,
    },
  }
}
