"use strict";

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bar(R, prop, foo) {
  R.prop(foo);
  foo;
  foo();
}

function baz() {
  (0, _prop2.default)(_prop2.default);
  _prop2.default;
  (0, _prop2.default)();
}