var User = require('../users/userModel.js');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = function (app, express) {
  app.get('/code', function() {
    console.log('loaded');
  });

  app.post('/signin', function(req, res, next) {
    var username = req.body.username;
    console.log('POST request running');

    findUser({username: username})
      .then(function(user) {
        if (!user) {
          return createUser({
            username: username,
            score: 0
          })
        }
      })
      .then(function(user) {
        res.send();
      })
      .fail(function(error) {
        next(error);
      });
  });
};
