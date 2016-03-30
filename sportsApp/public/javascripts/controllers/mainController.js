(function() {
  "use strict";

  var app = angular.module("sportsApp.controllers.main", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("dashboard", {
      parent: "root",
      url: "/dashboard",
      views: {
        "container@": {
          templateUrl: "partials/dashboard",
          controller: "MainController"
        }
      },
      resolve: {
        getContestsPromise: [
          "contestService", function(contestService) {
            return contestService.getAll();
          }
        ]
      }
    });
  }]);

  app.controller("MainController", ["$scope", "authService", "contestService",
  function($scope, authService, contestService) {
    $scope.isLoggedIn = authService.isLoggedIn;
    $scope.contests = contestService.contests;
  }]);
})();
