var path = require('path');
var webpack = require('webpack');
var plugins = [new webpack.NoErrorsPlugin()];
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


var conf = {
      entry: './tools',
      target: 'node',
      output: {
          path: path.join(__dirname, '/dist'),
          filename: 'index.js'
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      plugins: plugins,
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=0'}
        ]
      },
      externals: nodeModules
  };

module.exports = conf;
