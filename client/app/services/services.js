angular.module('cheeseWhiz.services', [])

.factory('Questions', function() {
  var data = [
      {
        question: "This salty variety hails from Cyprus, is made from goat’s and sheep’s milk, and is typically eaten grilled or fried.",
        choices: ["Mozzarella", "Feta", "Halloumi", "Manchego"],
        correct: 2
      },

      {
        question: "Sold in varying strengths, the ubiquitous Cheddar originates from which country?",
        choices: ["The U.S.", "Australia", "Scotland", "England"],
        correct: 3
      },

      {
        question: "What are the holes in Swiss cheese called?",
        choices: ["Eyes", "Craters", "Caves", "Holes"],
        correct: 0
      },

      {
        question: "This country produces more cheese than any other.",
        choices: ["Switzerland", "The U.S.", "England", "Greece"],
        correct: 1},

      {
        question: "Paneer, a fresh, unaged cheese, can usually be found in dishes from which country?",
        choices: ["Russia", "Japan", "Brazil", "India"],
        correct: 3},

      {
        question: "Which of the following cheeses is not originally from France?",
        choices: ["Camembert", "Brie", "Gruyère", "Munster"],
        correct: 2
      }
    ];

  var userInfo = {
    chosen: [],
    qNum: 0
  }

  return {
    data: data,
    userInfo: userInfo
  };
})
.factory('Results', ['Questions', function(Questions) {
  var isCorrect = function(i) {
    return Questions.userInfo.chosen[i] === Questions.data[i].correct;
  };
}])
.factory('Redirects', function() {
  var loadResults = function() {

  };
});