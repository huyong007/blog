'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminRequired = exports.authUser = undefined;

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authUser = exports.authUser = function authUser(req, res, next) {
  res.locals.currentUser = null;

  var token = req.headers['x-access-token'] || req.signedCookies[_config2.default.cookieName] || '';

  if (token) {
    try {
      var decoded = _jwtSimple2.default.decode(token, _config2.default.jwtSecret);
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400);
        return;
      }

      req.user = res.locals.currentUser = decoded;
      return next();
    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};

var adminRequired = exports.adminRequired = function adminRequired(req, res, next) {
  if (!req.user) {
    var err = new Error('需要登录');
    err.status = 403;
    next(err);
    return;
  }
  if (!req.user.isAdmin) {
    var _err = new Error('需要管理员权限');
    _err.status = 403;
    next(_err);
    return;
  }

  next();
};
//# sourceMappingURL=auth.js.map