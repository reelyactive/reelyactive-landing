/**
 * Copyright reelyActive 2018-2019
 * We believe in an open Internet of Things
 */

angular.module('landing', [ 'ui.bootstrap' ])

  // Questions controller
  .controller('QuestionsCtrl', function($scope) {
    $scope.activeQuestion = 0;
    $scope.questions = [
      { image: "images/landing-who.jpg", id: 0 },
      { image: "images/landing-what.jpg", id: 1 },
      { image: "images/landing-where.jpg", id: 2 },
      { image: "images/landing-how.jpg", id: 3 }
    ];
  });
