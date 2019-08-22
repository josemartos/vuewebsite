const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

exports.generateHTML = ({ template, filename }) => ({
  plugins: [
    new HtmlWebPackPlugin({
      template,
      filename
    })
  ]
});

exports.extractCSS = ({ filename, chunkFilename }) => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename,
      chunkFilename
    })
  ]
});

exports.optimizeCSS = () => ({
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
});

exports.vueLoader = () => ({
  plugins: [new VueLoaderPlugin()]
});

exports.copyAssets = ({ from, to }) => ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from,
        to
      }
    ])
  ]
});

exports.cleanBuild = () => ({
  plugins: [new CleanWebpackPlugin()]
});
