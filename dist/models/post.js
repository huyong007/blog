'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    title: String,
    content: String,
    authorId: ObjectId
});
var PostModel = _mongoose2.default.model('Post', PostSchema);

exports.default = PostModel;
//# sourceMappingURL=post.js.map