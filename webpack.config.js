'use strict';

var webpack = require('webpack');

module.exports = {
  debug: true,
  entry: [
    './src/main.js'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  devServer: {
    inline: true,
    port: 8080
  }
};
