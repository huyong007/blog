var mongoose = require('mongoose');
const Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    title:String,
    content:String
});



module.exports=mongoose.model('Post',PostSchema);

