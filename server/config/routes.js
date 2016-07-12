var userController = require('../users/userController.js');

module.exports = function (app, express) {
  app.get('/', function() {
    console.log('loaded');
  });

  app.post('/signin', userController.signIn);
};