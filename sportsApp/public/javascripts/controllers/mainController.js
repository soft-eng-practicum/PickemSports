(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.main", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("dashboard",
    {
      parent: "root",
      url: "/dashboard",
      views: {
        "container@":
        {
          templateUrl: "partials/dashboard",
          controller: "MainController"
        }
      }
    });
  }]);

  app.controller("MainController", ["$scope", "authService",
    function($scope, authService)
  {
    $scope.isLoggedIn = authService.isLoggedIn;
  }]);
})();
