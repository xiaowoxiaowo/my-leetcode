const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
    	{
        test: '/\.js$/',
        use: path.resolve(__dirname, 'loaders/myLoader.js')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'demo',
      template: './index.html'
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};