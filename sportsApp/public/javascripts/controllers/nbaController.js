(function() {
  "use strict";

  var app = angular.module("sportsApp.controllers.nba", ["ui.router"]);


  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("nba", {
      parent: "root",
      url: "/nba",
      views: {
        "container@": {
          templateUrl: "partials/nba",
          controller: "NbaController"
        }
      }
    });
  }]);

  app.controller("NbaController", ["$scope", "nbateams", function($scope, nbateams) {
    $scope.nbateams = nbateams;
    $scope.test = "test";

  }]);
})();
