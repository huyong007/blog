var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    title: String,
    content: String,
    authorId: ObjectId,
});
const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;

var debug = require('debug')('blog:mpost');
debug('test mpost log');




