'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  name: String,
  pass: String
});

var UserModel = _mongoose2.default.model('User', UserSchema);

exports.default = UserModel;
//# sourceMappingURL=user.js.map