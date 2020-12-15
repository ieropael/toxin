const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pug = {
    test: /\.pug$/,
    use: [
        'html-loader?attributes=false',
        'pug-html-loader?pretty=true'
    ]
};
const sass = {
    test: /\.(s[ac]ss)$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
    ]
};
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [pug, sass]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: false
    }),
    new MiniCssExtractPlugin({
        filename: "style.css"
    })
 ]
};
module.exports = config;