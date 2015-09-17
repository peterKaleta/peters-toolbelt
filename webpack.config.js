var path = require('path');

var webpack = require('webpack');

var plugins = [new webpack.NoErrorsPlugin()];


var conf = {
                entry: './tools',
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
                }
            };

module.exports = conf;
