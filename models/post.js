var mongoose = require('mongoose');
const Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    title:String,
    content:String
});
var debug = require('debug')('blog:mopost');
debug('test mpost log');


module.exports=mongoose.model('Post',PostSchema);

