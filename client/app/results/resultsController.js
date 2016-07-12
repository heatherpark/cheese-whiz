angular.module('cheeseWhiz.results', [

])

.controller('ResultsController', function($scope, Questions, Results) {
  $scope.calcScore = function() {
    $scope.finalScore = 0;

    Questions.userInfo.chosen.forEach(function(answer, index) {
      console.log(Questions.userInfo.chosen);
      if (Results.isCorrect(answer, index)) {
        $scope.finalScore++;
      }
    });
  }

  $scope.calcScore();

  $scope.total = Questions.data.length;
});