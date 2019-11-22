'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./middlewares/auth');

var auth = _interopRequireWildcard(_auth);

var _page = require('./controllers/page');

var page = _interopRequireWildcard(_page);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', page.homePage);

/* GET posts page. */
router.get('/posts', page.postsPage);

/* GET posts create page. */
router.get('/posts/create', auth.adminRequired, page.createPage);

/* GET posts edit page. */
router.get('/posts/edit', auth.adminRequired, page.editPage);

/* GET posts show page. */
router.get('/posts/show', page.showPage);

/* GET signup page. */
router.get('/signup', page.signupPage);

/* GET signin page. */
router.get('/signin', page.signinPage);

/* GET signout */
router.get('/signout', page.signout);

exports.default = router;
//# sourceMappingURL=route.page.js.map