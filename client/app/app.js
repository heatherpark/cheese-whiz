var cheeseWhiz = angular.module('cheeseWhiz', [
  'cheeseWhiz.quiz',
  'cheeseWhiz.results',
  'cheeseWhiz.services',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/quiz', {
      templateUrl: 'app/quiz/quizView.html',
      controller: 'QuizController'
    })
    .when('/results', {
      templateUrl: 'app/results/resultsView.html',
      controller: 'ResultsController'
    });
});