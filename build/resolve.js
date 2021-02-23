"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExecuteRequestSuccessEvent = require("./ExecuteRequestSuccessEvent");

var _ExecuteRequestFailEvent = require("./ExecuteRequestFailEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolve = function resolve(labels) {
  if (labels.includes(_ExecuteRequestSuccessEvent.ExecuteRequestSuccessEventType)) {
    return _ExecuteRequestSuccessEvent.ExecuteRequestSuccessEvent;
  } else if (labels.includes(_ExecuteRequestFailEvent.ExecuteRequestFailEventType)) {
    return _ExecuteRequestFailEvent.ExecuteRequestFailEvent;
  }

  return false;
};

var _default = resolve;
exports["default"] = _default;