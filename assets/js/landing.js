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
      },
      {
        image: "images/partners-indoors-landing.jpg",
        name: "indoo.rs",
        description: "Add the leading Indoor Positioning system to your app.",
        id: 2
      },
      {
        image: "images/partners-logient-landing.jpg",
        name: "Logient",
        description: "Drive your digital transformation to the next level, all in one place.",
        id: 3
      },
      {
        image: "images/partners-jogogo-landing.jpg",
        name: "Jogogo",
        description: "Digitize the physical store. Measure in-store activity and provide mobile engagement solutions.",
        id: 4
      }
    ];
  })

  // Industries controller
  .controller('IndustriesCtrl', function($scope) {
    $scope.activeIndustry = 0;
    $scope.industries = [
      {
        image: "images/applications-workplace.jpg",
        url: "industries/workplace/",
        id: 0
      },
      {
        image: "images/applications-healthcare.jpg",
        url: "industries/healthcare/",
        id: 1
      },
      {
        image: "images/applications-retail.jpg",
        url: "industries/retail/",
        id: 2
      },
      {
        image: "images/applications-events.jpg",
        url: "industries/events/",
        id: 3
      }
    ];
  });
