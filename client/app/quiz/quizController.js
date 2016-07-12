angular.module('cheeseWhiz.quiz', [
  'ngRoute'
])

.controller('QuizController', function($scope, $route, Questions) {
  $scope.number = Questions.userInfo.qNum;
  $scope.question = Questions.data[$scope.number].question;
  $scope.choices = Questions.data[$scope.number].choices;
  $scope.buttonText = 'Next';
  $scope.length = Questions.data.length;

  $scope.toggled = {
    index: -1
  };

  $scope.handleClick = function(i) {
    $scope.toggled.index = i;
    Questions.userInfo.chosen[$scope.number] = i;
  };

  $scope.nextClick = function() {
    Questions.userInfo.qNum++;
    $route.reload();
  };
});