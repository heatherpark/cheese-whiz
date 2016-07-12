var express = require('express');
var firebase = require('firebase');

var app = express();


require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 1337;

app.listen(process.env.PORT || port);
console.log('Server now listening on port ' + port);

module.exports = {
  app: app,
  db: db
};
