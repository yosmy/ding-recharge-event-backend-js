"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecuteRequestSuccessEventType = exports.ExecuteRequestSuccessEvent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var type = "yosmy.recharge.ding.execute_request_success";
exports.ExecuteRequestSuccessEventType = type;

var ExecuteRequestSuccessEvent = function ExecuteRequestSuccessEvent(_ref) {
  var ui = _ref.ui,
      involved = _ref.involved,
      extra = _ref.extra,
      date = _ref.date;
  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    label: /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Llamada exitosa a la api"),
    involved: [/*#__PURE__*/_react["default"].createElement(_ui.Json, null, involved)],
    extra: /*#__PURE__*/_react["default"].createElement(_ui.Json, null, extra),
    date: date
  });
};

exports.ExecuteRequestSuccessEvent = ExecuteRequestSuccessEvent;
ExecuteRequestSuccessEvent.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired
};