angular.module('cheeseWhiz.signin', [])

.controller('SigninController', function ($scope, Signin) {
  $scope.user = {};

  $scope.addUsername = function() {
    Signin.saveUsername($scope.user);
  };
});