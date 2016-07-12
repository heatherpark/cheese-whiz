angular.module('memoryGame.board', [])

.controller('BoardController', function($scope) {
  $scope.cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
});