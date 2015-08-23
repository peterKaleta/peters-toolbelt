var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
      'tools': './tools/'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=0' }
      ]
    },

    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty'
   }
};
