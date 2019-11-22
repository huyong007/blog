'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.mongodbUrl);

var db = _mongoose2.default.connection;
db.on('error', function (err) {
  console.log(err);
});

db.once('open', function () {
  console.log('mongodb connect successed!');
});
//# sourceMappingURL=init.js.map