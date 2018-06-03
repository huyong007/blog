var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:32769/blog');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库连接成功！')
});
var debug = require('debug')('blog:init');
debug('test init log');
