var memoryGame = angular.module('memoryGame', [
  'memoryGame.board',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/board', {
      templateUrl: 'app/board/boardView.html',
      controller: 'BoardController'
    })
});