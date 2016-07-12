module.exports = function (app, express) {
  app.get('/', function() {
    console.log('loaded');
  });
};