'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var WebpackConf = (function () {
  function WebpackConf(config) {
    _classCallCheck(this, WebpackConf);

    this.config = {
      output: {
        path: 'dist',
        filename: 'bundle.js'
      },
      loaders: {},
      node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
      },
      plugins: [new _webpack2['default'].NoErrorsPlugin()]
    };

    this.userConfig = config;
  }

  _createClass(WebpackConf, [{
    key: 'iNeedES7',
    value: function iNeedES7() {
      this.config.loaders.concat(_loaders2['default'].ES7);
      return this;
    }
  }, {
    key: 'iNeedSCSS',
    value: function iNeedSCSS() {
      this.config.loaders.concat(_loaders2['default'].SCSS);
      return this;
    }
  }, {
    key: 'iNeedReact',
    value: function iNeedReact() {
      this.config.loaders.concat(_loaders2['default'].reactES7);
      return this;
    }
  }, {
    key: 'iNeedBootstrap',
    value: function iNeedBootstrap() {
      this.config.loaders.concat(_loaders2['default'].bootstrap);
      return this;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      return _lodash2['default'].merge(this.config, this.userConfig);
    }
  }]);

  return WebpackConf;
})();

exports['default'] = WebpackConf;
module.exports = exports['default'];