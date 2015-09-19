/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _webpack = __webpack_require__(6);\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _decorators = __webpack_require__(3);\n\nvar _decorators2 = _interopRequireDefault(_decorators);\n\nmodule.exports = {\n  webpack: _webpack2['default'],\n  decorators: _decorators2['default']\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"lodash\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"lodash\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nexports['default'] = styleDefaults;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _lodash = __webpack_require__(1);\n\nvar _react = __webpack_require__(15);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction styleDefaults(Component) {\n  var defaultStyles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n  return (function (_React$Component) {\n    _inherits(StyledComponent, _React$Component);\n\n    function StyledComponent() {\n      _classCallCheck(this, StyledComponent);\n\n      _get(Object.getPrototypeOf(StyledComponent.prototype), 'constructor', this).apply(this, arguments);\n    }\n\n    _createClass(StyledComponent, [{\n      key: 'render',\n      value: function render() {\n        var _props = this.props;\n        var _props$styles = _props.styles;\n        var styles = _props$styles === undefined ? {} : _props$styles;\n\n        var restProps = _objectWithoutProperties(_props, ['styles']);\n\n        styles = (0, _lodash.extend)({}, defaultStyles, styles);\n\n        return _react2['default'].createElement(Component, _extends({}, restProps, { styles: styles }));\n      }\n    }]);\n\n    return StyledComponent;\n  })(_react2['default'].Component);\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/decorators/StyleDefaults.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/decorators/StyleDefaults.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _StyleDefaults = __webpack_require__(2);\n\nvar _StyleDefaults2 = _interopRequireDefault(_StyleDefaults);\n\nexports['default'] = {\n  StyleDefaults: _StyleDefaults2['default']\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/decorators/index.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/decorators/index.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nexports['default'] = function (conf) {\n  if (process.env.NODE_ENV === 'production') {\n    return conf;\n  } else {\n    conf.entry = _lodash2['default'].isArray(conf.entry) ? conf.entry : [conf.entry];\n    conf.entry.unshift('webpack/hot/dev-server');\n    return conf;\n  }\n};\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/helpers/hotDevServer.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/helpers/hotDevServer.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _hotDevServer = __webpack_require__(4);\n\nvar _hotDevServer2 = _interopRequireDefault(_hotDevServer);\n\nexports['default'] = {\n  hotDevServer: _hotDevServer2['default']\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/helpers/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/helpers/index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar _loaders = __webpack_require__(10);\n\nvar _loaders2 = _interopRequireDefault(_loaders);\n\nvar _helpers = __webpack_require__(5);\n\nvar _helpers2 = _interopRequireDefault(_helpers);\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar WebpackConf = (function () {\n  function WebpackConf(config) {\n    _classCallCheck(this, WebpackConf);\n\n    this.config = {\n      output: {\n        path: 'dist',\n        filename: 'bundle.js'\n      },\n      module: {\n        loaders: []\n      },\n      resolve: {\n        alias: {},\n        extensions: []\n      },\n      node: {\n        net: 'empty',\n        tls: 'empty',\n        dns: 'empty',\n        fs: 'empty'\n      },\n      plugins: []\n    };\n    this.postProcess = [];\n\n    this.userConfig = config;\n    this._config = _lodash2['default'].clone(this.config);\n  }\n\n  _createClass(WebpackConf, [{\n    key: 'addLoaders',\n    value: function addLoaders(loaders) {\n      this.config.module.loaders = this.config.module.loaders.concat(loaders);\n      return this;\n    }\n  }, {\n    key: 'addPlugins',\n    value: function addPlugins(plugins) {\n      this.config.plugins = this.config.plugins.concat(plugins);\n      return this;\n    }\n  }, {\n    key: 'addExtensions',\n    value: function addExtensions(extensions) {\n      extensions = _lodash2['default'].isArray(extensions) ? extensions : [extensions];\n      this._config.resolve.extensions = this._config.resolve.extensions.concat(extensions);\n    }\n  }, {\n    key: 'iNeedES7',\n    value: function iNeedES7() {\n      return this.addLoaders(_loaders2['default'].ES7);\n    }\n  }, {\n    key: 'iNeedSCSS',\n    value: function iNeedSCSS() {\n      return this.addLoaders(_loaders2['default'].SCSS);\n    }\n  }, {\n    key: 'iNeedReact',\n    value: function iNeedReact() {\n      this.addExtensions(['', '.jsx', '.js']);\n      return this.addLoaders(_loaders2['default'].reactES7);\n    }\n  }, {\n    key: 'iNeedWebFonts',\n    value: function iNeedWebFonts() {\n      return this.addLoaders(_loaders2['default'].webfonts);\n    }\n  }, {\n    key: 'iNeedBootstrap',\n    value: function iNeedBootstrap() {\n      this.iNeedWebFonts();\n      return this.addLoaders(_loaders2['default'].bootstrap);\n    }\n  }, {\n    key: 'iNeedImages',\n    value: function iNeedImages() {\n      return this.addLoaders(_loaders2['default'].images);\n    }\n  }, {\n    key: 'iNeedInlineSVGs',\n    value: function iNeedInlineSVGs() {\n      return this.addLoaders(_loaders2['default'].inlineSVG);\n    }\n  }, {\n    key: 'iNeedHotDevServer',\n    value: function iNeedHotDevServer() {\n      this.postProcess.push(_helpers2['default'].hotDevServer);\n      return this;\n    }\n  }, {\n    key: 'getConfig',\n    value: function getConfig() {\n      var conf = _lodash2['default'].merge(this.config, this.userConfig, this._config);\n\n      _lodash2['default'].each(this.postProcess, function (helper) {\n        conf = helper(conf);\n      });\n\n      return conf;\n    }\n  }]);\n\n  return WebpackConf;\n})();\n\nexports['default'] = WebpackConf;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = {\n  test: /\\.js$/,\n  exclude: /node_modules/,\n  loader: 'babel?stage=0'\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/ES7.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/ES7.js?");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = [{\n  test: /bootstrap\\/js\\//,\n  loader: 'imports?jQuery=jquery'\n}, {\n  test: /\\.png$/,\n  loader: 'url-loader?limit=8192&mimetype=image/png&name=images/[hash].[ext]'\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/bootstrap.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/bootstrap.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\nexports['default'] = [{\n    test: /\\.(jpe?g|png|gif|svg)$/i,\n    loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/images.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/images.js?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _reactES7 = __webpack_require__(12);\n\nvar _reactES72 = _interopRequireDefault(_reactES7);\n\nvar _bootstrap = __webpack_require__(8);\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _scss = __webpack_require__(13);\n\nvar _scss2 = _interopRequireDefault(_scss);\n\nvar _ES7 = __webpack_require__(7);\n\nvar _ES72 = _interopRequireDefault(_ES7);\n\nvar _images = __webpack_require__(9);\n\nvar _images2 = _interopRequireDefault(_images);\n\nvar _inlineSVG = __webpack_require__(11);\n\nvar _inlineSVG2 = _interopRequireDefault(_inlineSVG);\n\nvar _webfonts = __webpack_require__(14);\n\nvar _webfonts2 = _interopRequireDefault(_webfonts);\n\nexports['default'] = {\n  reactES7: _reactES72['default'],\n  bootstrap: _bootstrap2['default'],\n  SCSS: _scss2['default'],\n  ES7: _ES72['default'],\n  images: _images2['default'],\n  inlineSVG: _inlineSVG2['default'],\n  webfonts: _webfonts2['default']\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/index.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/index.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = [{\n  test: /\\.svg$/,\n  loader: 'svg-inline'\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/inlineSVG.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/inlineSVG.js?");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = [{\n  test: /\\.jsx?$/,\n  loaders: ['react-hot', 'babel?stage=0'],\n  exclude: /node_modules/\n}, {\n  test: /\\.js$/,\n  exclude: /node_modules/,\n  loader: 'babel?stage=0'\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/reactES7.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/reactES7.js?");

/***/ },
/* 13 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = [{\n  test: /\\.scss$/,\n  loader: 'style!css!sass'\n}, {\n  test: /\\.css$/,\n  loader: 'style!css'\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/scss.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/scss.js?");

/***/ },
/* 14 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = [{\n  test: /\\.jpg$/,\n  loader: 'file-loader?limit=8192&mimetype=image/jpg&name=images/[hash].[ext]'\n}, {\n  test: /\\.woff(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'url?limit=8192&mimetype=application/font-woff&name=/[hash].[ext]'\n}, {\n  test: /\\.woff2(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'url?limit=8192&mimetype=application/font-woff&name=/[hash].[ext]'\n}, {\n  test: /\\.ttf(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'url?limit=8192&mimetype=application/octet-stream&name=/[hash].[ext]'\n}, {\n  test: /\\.eot(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'file?limit=8192&mimetype=application/vnd.ms-fontobject&name=/[hash].[ext]'\n}, {\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'url?limit=8192&mimetype=image/svg+xml&name=images/[hash].[ext]'\n}];\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./tools/webpack/loaders/webfonts.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./tools/webpack/loaders/webfonts.js?");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("module.exports = require(\"react\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"react\"\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }
/******/ ]);