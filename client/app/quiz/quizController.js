angular.module('cheeseWhiz.quiz', [
  'ngRoute'
])

.controller('QuizController', function($scope, $route, $location, Questions) {
  $scope.number = Questions.userInfo.qNum;
  $scope.question = Questions.data[$scope.number].question;
  $scope.choices = Questions.data[$scope.number].choices;
  $scope.buttonText = 'Next';
  $scope.length = Questions.data.length;

  $scope.toggled = {
    index: -1
  };

  $scope.handleClick = function(i) {
    console.log(i);
    $scope.toggled.index = i;
    console.log(Questions.userInfo.chosen);
    Questions.userInfo.chosen[$scope.number] = i;
  };

  $scope.nextClick = function() {
    if ($scope.number === $scope.length - 1) {
      $location.path('/results')
    } else {
      Questions.userInfo.qNum++;
      $route.reload();
    }

  };
});