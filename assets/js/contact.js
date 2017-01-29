/**
 * Copyright reelyActive 2017
 * We believe in an open Internet of Things
 */

Champagne.enableSockets();

Champagne.ready(function() {

  angular.module('contact', [ 'champagne' ])

    .controller('InteractionCtrl', function($scope, cormorant) {
      var url = 'http://reelyactive.com';

      cormorant.getStory(url, function(story, url) {
        $scope.story = story;
      });
    });

});
