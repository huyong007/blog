'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signout = exports.signinPage = exports.signupPage = exports.showPage = exports.editPage = exports.createPage = exports.postsPage = exports.homePage = undefined;

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* GET home page. */
var homePage = exports.homePage = function homePage(req, res, next) {
    res.render('index');
};

/* GET posts page. */
var postsPage = exports.postsPage = function postsPage(req, res, next) {
    res.render('posts', { title: '我的文章' });
};

/* GET posts create page. */
var createPage = exports.createPage = function createPage(req, res, next) {
    res.render('create');
};

/* GET posts edit page. */
var editPage = exports.editPage = function editPage(req, res, next) {
    var id = req.query.id;


    res.render('edit', { id: id });
};

/* GET posts show page. */
var showPage = exports.showPage = function showPage(req, res, next) {
    var id = req.query.id;


    _post2.default.findOne({ _id: id }, function (err, post) {
        post.mkContent = (0, _marked2.default)(post.content);
        res.render('show', { post: post });
    });
};

/* GET signup page. */
var signupPage = exports.signupPage = function signupPage(req, res, next) {
    res.render('signup');
};

/* GET signin page. */
var signinPage = exports.signinPage = function signinPage(req, res, next) {
    res.render('signin');
};

/* GET signout */
var signout = exports.signout = function signout(req, res, next) {
    res.clearCookie(_config2.default.cookieName, { path: '/' });
    res.redirect('/');
};
//# sourceMappingURL=page.js.map