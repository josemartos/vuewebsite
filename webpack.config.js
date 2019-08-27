const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = require("./webpack.plugins");

const commonConfig = merge([
  {
    output: {
      filename: "[name].[chunkhash].js"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader"
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(js|vue)$/,
          use: "eslint-loader",
          enforce: "pre"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "./styles"),
        assets: path.resolve(__dirname, "./assets")
      }
    }
  },
  plugins.vueLoader(),
  plugins.generateHTML({
    template: "./index.html",
    filename: "./index.html"
  }),
  plugins.extractCSS({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].css"
  }),
  plugins.copyAssets({
    from: path.join(__dirname, "assets"),
    to: "assets"
  })
]);

const productionConfig = merge([plugins.cleanBuild(), plugins.optimizeCSS()]);

const developmentConfig = merge([{ devtool: "cheap-module-source-map" }]);

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
