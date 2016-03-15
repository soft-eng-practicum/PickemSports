(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.userpage", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("userpage",
    {
      parent: "root",
      url: "/userpage",
      views: {
        "container@":
        {
          templateUrl: "partials/userpage",
          controller: "UserController"
        }
      }
    });
  }]);

  app.controller("UserController", ["$scope", "authService",
    function($scope, authService)
  {
    $scope.isLoggedIn = authService.isLoggedIn;
    $scope.currentUser = authService.currentUser;
    $scope.logOut = authService.logOut;
  }]);

})();
