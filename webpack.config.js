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
const fonts = {
  test: /\.(woff|ttf|svg)$/,
  include: [
    path.resolve(__dirname, 'src/fonts')
  ],
  use: [
    {
      loader: 'file-loader?name=fonts/[name].[ext]'
    }
  ]
};
const images = {
  test: /\.(jpe?g|png|gif|svg)$/,
  exclude: [
    path.resolve(__dirname, 'src/fonts')
  ],
  use: [
    {
      loader: "file-loader?name=images/[name].[ext]"
    }
  ]
};
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    rules: [pug, sass, fonts, images]
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