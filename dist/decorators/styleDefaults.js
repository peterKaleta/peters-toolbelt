'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = styleDefaults;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

function styleDefaults() {
  var defaultStyles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function (DecoratedComponent) {

    return (function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          var _props = this.props;
          var _props$styles = _props.styles;
          var styles = _props$styles === undefined ? {} : _props$styles;

          var restProps = _objectWithoutProperties(_props, ['styles']);

          styles = (0, _lodash.extend)({}, defaultStyles, styles);
          return React.createElement(DecoratedComponent, _extends({}, restProps, { styles: styles }));
        }
      }]);

      return _class;
    })();
  };
}

module.exports = exports['default'];