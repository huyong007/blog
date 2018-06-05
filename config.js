var debug = require('debug')('blog:config');
debug('test config log');

module.exports = {
  cookieName: 'your_cookie_name',
  mongodbUrl: 'mongodb://localhost:32769/firstapp',
  admin: 'admin',
  sessionSecret: 'your_session_secret'
}

