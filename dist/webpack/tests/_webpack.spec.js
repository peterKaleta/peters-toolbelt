'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _chai = require('chai');

describe('webpack', function () {
  it('is', function (done) {
    var wc = new _2['default']();
    (0, _chai.expect)(wc).to.exist;
    done();
  });
});