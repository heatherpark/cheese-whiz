angular.module('cheeseWhiz.results', [

])

.controller('ResultsController', function($scope, Questions, Results) {
  $scope.finalScore = 0;
  $scope.total = Questions.data.length;

  $scope.calScore = function() {
    _.forEach(Questions.userInfo.chosen, function(answer) {
      if (Results.isCorrect(answer)) {
        $scope.finalScore++;
      }
    });
  }
});