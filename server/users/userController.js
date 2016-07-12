var User = require('./userModel.js');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);


module.exports = {
  signin: function(req, res, next) {
    var username = req.body.username;

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
        res.json(user);
      })
      .fail(function(error) {
        next(error);
      });
  }
};