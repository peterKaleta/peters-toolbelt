'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _StyleDefaults = require('./StyleDefaults');

var _StyleDefaults2 = _interopRequireDefault(_StyleDefaults);

exports['default'] = {
  StyleDefaults: _StyleDefaults2['default']
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports['default'] = styleDefaults;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function styleDefaults(Component) {
  var defaultStyles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return (function (_React$Component) {
    _inherits(StyledComponent, _React$Component);

    function StyledComponent() {
      _classCallCheck(this, StyledComponent);

      _get(Object.getPrototypeOf(StyledComponent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StyledComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var _props$styles = _props.styles;
        var styles = _props$styles === undefined ? {} : _props$styles;

        var restProps = _objectWithoutProperties(_props, ['styles']);

        styles = (0, _lodash.extend)({}, defaultStyles, styles);

        return _react2['default'].createElement(Component, _extends({}, restProps, { styles: styles }));
      }
    }]);

    return StyledComponent;
  })(_react2['default'].Component);
}

module.exports = exports['default'];
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _webpack = require('./webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _decorators = require('./decorators');

var _decorators2 = _interopRequireDefault(_decorators);

module.exports = {
  webpack: _webpack2['default'],
  decorators: _decorators2['default']
};
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

exports['default'] = function (conf) {
  if (process.env.NODE_ENV === 'production') {
    return conf;
  } else {
    conf.entry = _lodash2['default'].isArray(conf.entry) ? conf.entry : [conf.entry];
    conf.entry.unshift('webpack/hot/dev-server');
    return conf;
  }
};

module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _hotDevServer = require('./hotDevServer');

var _hotDevServer2 = _interopRequireDefault(_hotDevServer);

exports['default'] = {
  hotDevServer: _hotDevServer2['default']
};
module.exports = exports['default'];
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
      resolve: {
        alias: {},
        extensions: []
      },
      node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
      },
      plugins: []
    };
    this.postProcess = [];

    this.userConfig = config;
    this._config = _lodash2['default'].clone(this.config);
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
    key: 'addExtensions',
    value: function addExtensions(extensions) {
      extensions = _lodash2['default'].isArray(extensions) ? extensions : [extensions];
      this._config.resolve.extensions = this._config.resolve.extensions.concat(extensions);
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
      this.addExtensions(['', '.jsx', '.js']);
      return this.addLoaders(_loaders2['default'].reactES7);
    }
  }, {
    key: 'iNeedWebFonts',
    value: function iNeedWebFonts() {
      return this.addLoaders(_loaders2['default'].webfonts);
    }
  }, {
    key: 'iNeedBootstrap',
    value: function iNeedBootstrap() {
      this.iNeedWebFonts();
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
      return this;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      var conf = _lodash2['default'].merge(this.config, this.userConfig, this._config);

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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel?stage=0'
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [{
  test: /bootstrap\/js\//,
  loader: 'imports?jQuery=jquery'
}, {
  test: /\.png$/,
  loader: 'url-loader?limit=8192&mimetype=image/png&name=images/[hash].[ext]'
}];
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = [{
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
}];
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactES7 = require('./reactES7');

var _reactES72 = _interopRequireDefault(_reactES7);

var _bootstrap = require('./bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _scss = require('./scss');

var _scss2 = _interopRequireDefault(_scss);

var _ES7 = require('./ES7');

var _ES72 = _interopRequireDefault(_ES7);

var _images = require('./images');

var _images2 = _interopRequireDefault(_images);

var _inlineSVG = require('./inlineSVG');

var _inlineSVG2 = _interopRequireDefault(_inlineSVG);

var _webfonts = require('./webfonts');

var _webfonts2 = _interopRequireDefault(_webfonts);

exports['default'] = {
  reactES7: _reactES72['default'],
  bootstrap: _bootstrap2['default'],
  SCSS: _scss2['default'],
  ES7: _ES72['default'],
  images: _images2['default'],
  inlineSVG: _inlineSVG2['default'],
  webfonts: _webfonts2['default']
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [{
  test: /\.svg$/,
  loader: 'svg-inline'
}];
module.exports = exports['default'];
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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [{
  test: /\.scss$/,
  loader: 'style!css!sass'
}, {
  test: /\.css$/,
  loader: 'style!css'
}];
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [{
  test: /\.jpg$/,
  loader: 'file-loader?limit=8192&mimetype=image/jpg&name=images/[hash].[ext]'
}, {
  test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=8192&mimetype=application/font-woff&name=/[hash].[ext]'
}, {
  test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=8192&mimetype=application/font-woff&name=/[hash].[ext]'
}, {
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=8192&mimetype=application/octet-stream&name=/[hash].[ext]'
}, {
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file?limit=8192&mimetype=application/vnd.ms-fontobject&name=/[hash].[ext]'
}, {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=8192&mimetype=image/svg+xml&name=images/[hash].[ext]'
}];
module.exports = exports['default'];
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _chai = require('chai');

describe('webpack', function () {
  it('exists', function () {
    (0, _chai.expect)(_2['default']).to.exist;
  });
});
