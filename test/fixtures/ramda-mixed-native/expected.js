"use strict";

var _add2 = _interopRequireDefault(require("ramda/src/add"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapper = (0, _map2.default)((0, _add2.default)(1));
mapper([1, 2, 3]);
[1, 2, 3].map(function (a) {
  return a + 1;
});
var obj = {
  map: 1
};

var obj1 = _defineProperty({}, _add2.default, 2);

var ob2 = {
  rate: _add2.default
};

function test() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _map2.default;
  return param;
}

var test1 = function test1() {
  var param2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _add2.default;
  return _add2.default;
};