angular.module('memoryGame.board', [])

.controller('BoardController', function($scope) {
  $scope.cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
  $scope.flippedClass = 'flipped';
  $scope.toggleItem = {
    index: -1
  };
  $scope.toggleClass = function(i) {
    console.log(i);
    $scope.toggleItem.index = i;
  }
});