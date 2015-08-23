'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [{
  test: /\.jsx?$/,
  loaders: ['react-hot', 'babel?stage=0'],
  exclude: /node_modules/
}, {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel?stage=0'
}];
module.exports = exports['default'];