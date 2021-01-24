
import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(config.mongodbUrl);

const db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('mongodb connect successed!')
});
