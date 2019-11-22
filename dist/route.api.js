'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./middlewares/auth');

var auth = _interopRequireWildcard(_auth);

var _post = require('./controllers/post');

var post = _interopRequireWildcard(_post);

var _user = require('./controllers/user');

var user = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users lists. */
router.get('/users', user.more);

/* GET posts lists */
router.get('/posts', post.more);

/* GET one post */
router.get('/posts/:id', post.one);

/* POST create post  */
router.post('/posts', auth.adminRequired, post.create);

/* PATCH edit post */
router.patch('/posts/:id', auth.adminRequired, post.edit);

/* POST signup user */
router.post('/signup', user.signup);

/* POST signin user */
router.post('/signin', user.signin);

exports.default = router;
//# sourceMappingURL=route.api.js.map