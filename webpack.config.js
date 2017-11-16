var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index_dev.js',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve(__dirname, 'dist/static'),

    // publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
    // i guess not?
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        use: [ 'json-loader']
      }
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('dev'),
    //   'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY),
    // }),
    new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: 'body',
          filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    // contentBase: './dist',
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3001",
    //     pathRewrite: {"^/api" : ""}
    //   }
    // },
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
