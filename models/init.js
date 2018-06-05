var mongoose = require('mongoose');
var debug = require('debug')('blog:init');
var config = require('../config');
debug('log init' + '  ' + config.mongodbUrl)
mongoose.connect('mongodb://127.0.0.1:32769/blog');

var db = mongoose.connection;
db.on('error', function (err) {
  console.log(err);
});

db.once('open', function() {
  console.log('mongodb connect successed!')
});

debug('test init log');
