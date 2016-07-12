var express = require('express');

var app = express();

var config = {
    apiKey: "AIzaSyBMXuckNyGSWalcx_-b64oMg4pOSY2sIYc",
    authDomain: "quiz-66559.firebaseapp.com",
    databaseURL: "https://quiz-66559.firebaseio.com",
    storageBucket: "",
};

firebase.initializeApp(config);

var db = firebase.database();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 1337;

app.listen(process.env.PORT || port);
console.log('Server now listening on port ' + port);

module.exports = {
  app: app,
  db: db
};
