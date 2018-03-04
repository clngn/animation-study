const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/js/index.js'),
  ],
  output: {
    path: resolve(__dirname, 'src/public/'),
    publicPath: '/public/',
    filename: 'app.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'src/public/'),
    host: '127.0.0.1',
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      //   test: /\.(jpg|png)/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       publicPath: '/public/',
      //       outputPath: 'asset/',
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
