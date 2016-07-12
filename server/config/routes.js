var userController = require('../users/userController.js');

module.exports = function (app, express) {
  app.get('/', function() {
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
        res.json(user);
      });
  });
};