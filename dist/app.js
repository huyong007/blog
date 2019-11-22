'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressEjsLayouts = require('express-ejs-layouts');

var _expressEjsLayouts2 = _interopRequireDefault(_expressEjsLayouts);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _auth = require('./middlewares/auth');

var auth = _interopRequireWildcard(_auth);

var _route = require('./route.api');

var _route2 = _interopRequireDefault(_route);

var _route3 = require('./route.page');

var _route4 = _interopRequireDefault(_route3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./models/init');


var MongoStore = new _connectMongo2.default(_expressSession2.default);
var app = (0, _express2.default)();

// view engine setup
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(_expressEjsLayouts2.default);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)(_config2.default.cookieName));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

// 使用认证信息
app.use(auth.authUser);

app.use('/', _route4.default);
app.use('/api/v1', _route2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message || err;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // the error response
  res.status(err.status || 500).format({
    json: function json() {
      res.send({ error: err.toString() });
    },
    html: function html() {
      res.render('error');
    },
    default: function _default() {
      var message = '' + errorDetails;
      res.send('500 Internal server error:\n' + err.toString());
    }
  });
});

exports.default = app;
//# sourceMappingURL=app.js.map