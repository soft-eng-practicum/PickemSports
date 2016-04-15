(function() {
  "use strict";

  var app = angular.module("sportsApp.controllers.mlb", ["ui.router"]);


  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("mlb", {
      parent: "root",
      url: "/mlb",
      views: {
        "container@": {
          templateUrl: "partials/mlb",
          controller: "MlbController"
        }
      }
    });
  }]);

  app.controller("MlbController", ["$scope", "mlbteams", function($scope, mlbteams) {
    $scope.mlbteams = mlbteams;

  }]);
})();
