var cheeseWhiz = angular.module('cheeseWhiz', [
  'cheeseWhiz.quiz',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/quiz', {
      templateUrl: 'app/quiz/quizView.html',
      controller: 'QuizController'
    });
});