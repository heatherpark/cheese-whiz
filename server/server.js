var express = require('express');
var mongoose = require('mongoose');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/cheeseWhiz';

mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Mongodb connection open');
});

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 1337;

app.listen(process.env.PORT || port);
console.log('Server now listening on port ' + port);

module.exports = {
  app: app,
  db: db
};
