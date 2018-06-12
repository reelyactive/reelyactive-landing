/**
 * Copyright reelyActive 2018
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
  })

  // Partners controller
  .controller('PartnersCtrl', function($scope) {
    $scope.activePartner = 0;
    $scope.partners = [
      {
        image: "images/partners-jibestream-landing.jpg",
        name: "Jibestream",
        description: "Display advanced data in the context of an indoor map.",
        id: 0
      },
      {
        image: "images/partners-ambiarc-landing.jpg",
        name: "Ambiarc",
        description: "Visualise real time data with a 3D map of your space.",
        id: 1
      }
    ];
  })

  // Applications controller
  .controller('ApplicationsCtrl', function($scope) {
    $scope.activeApplication = 0;
    $scope.applications = [
      {
        image: "images/applications-workplace.jpg",
        url: "applications/workplace/",
        id: 0
      },
      {
        image: "images/applications-healthcare.jpg",
        url: "applications/healthcare/",
        id: 1
      },
      {
        image: "images/applications-events.jpg",
        url: "applications/events/",
        id: 2
      }
    ];
  });
