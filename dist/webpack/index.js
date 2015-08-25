'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var WebpackConf = (function () {
  function WebpackConf(config) {
    _classCallCheck(this, WebpackConf);

    this.config = {
      output: {
        path: 'dist',
        filename: 'bundle.js'
      },
      module: {
        loaders: []
      },
      node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
      },
      plugins: []
    };

    this.userConfig = config;
  }

  _createClass(WebpackConf, [{
    key: 'addLoaders',
    value: function addLoaders(loaders) {
      this.config.module.loaders = this.config.module.loaders.concat(loaders);
      return this;
    }
  }, {
    key: 'addPlugins',
    value: function addPlugins(plugins) {
      this.config.plugins = this.config.plugins.concat(plugins);
      return this;
    }
  }, {
    key: 'iNeedES7',
    value: function iNeedES7() {
      return this.addLoaders(_loaders2['default'].ES7);
    }
  }, {
    key: 'iNeedSCSS',
    value: function iNeedSCSS() {
      return this.addLoaders(_loaders2['default'].SCSS);
    }
  }, {
    key: 'iNeedReact',
    value: function iNeedReact() {
      return this.addLoaders(_loaders2['default'].reactES7);
    }
  }, {
    key: 'iNeedBootstrap',
    value: function iNeedBootstrap() {
      return this.addLoaders(_loaders2['default'].bootstrap);
    }
  }, {
    key: 'iNeedImages',
    value: function iNeedImages() {
      return this.addLoaders(_loaders2['default'].images);
    }
  }, {
    key: 'iNeedInlineSVGs',
    value: function iNeedInlineSVGs() {
      return this.addLoaders(_loaders2['default'].inlineSVG);
    }
  }, {
    key: 'iNeedHotDevServer',
    value: function iNeedHotDevServer() {
      this.postProcess.push(_helpers2['default'].hotDevServer);
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      var conf = _lodash2['default'].merge(this.config, this.userConfig);
      conf.plugins.push(new _webpack2['default'].NoErrorsPlugin());

      _lodash2['default'].each(this.postProcess, function (helper) {
        conf = helper(conf);
      });

      return conf;
    }
  }]);

  return WebpackConf;
})();

exports['default'] = WebpackConf;
module.exports = exports['default'];