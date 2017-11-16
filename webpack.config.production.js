var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'static/bundle.js',
      // the output bundle

      path: path.resolve(__dirname, 'dist/'),

      // publicPath: '/static/'
      // necessary for HMR to know where to load the hot update chunks
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
      new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
      }),
    ]
  }
