'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edit = exports.one = exports.create = exports.more = undefined;

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var more = exports.more = function more(req, res, next) {

    _post2.default.find({}, {}).exec().then(function (posts) {
        res.json({ postsList: posts });
    }).catch(next);
};

/* POST create post */
var create = exports.create = function create(req, res, next) {
    var _req$body = req.body,
        title = _req$body.title,
        content = _req$body.content;


    var post = new _post2.default();
    post.title = title;
    post.content = content;
    post.authorId = res.locals.currentUser._id;
    post.save().then(function (doc) {
        re.json({ post: doc });
    }).catch(next);
};

var one = exports.one = function one(req, res, next) {
    var id = req.params.id;

    _post2.default.findOne({ _id: id }).exec().then(function (post) {
        res.json({ post: post });
    }).catch();
    ;
};

var edit = exports.edit = function edit(req, res, next) {
    var _req$params = req.params,
        id = _req$params.id,
        title = _req$params.title,
        content = _req$params.content;


    _post2.default.findOneAndUpdate({ _id: id }, { title: title, content: content }).exec().then(function () {
        res.end();
    }).catch(next);
};
//# sourceMappingURL=post.js.map