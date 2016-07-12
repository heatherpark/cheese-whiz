angular.module('cheeseWhiz.signin', [])

.controller('SigninController', function ($scope, $location, Signin) {
  $scope.user = {};

  $scope.addUsername = function() {
    Signin.saveUsername($scope.user);
    $scope.user = {};
    $location.path('/quiz');
  };
});