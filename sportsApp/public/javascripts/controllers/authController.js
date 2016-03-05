(function()
{
  "use strict";

  var app = anglar.module("sportsApp.controllers.auth", ["ui.router"]);

  app.config([
    "$stateProvider", function($stateProvider)
    {
      $stateProvider.state("login"),
      {
        parent: "root",
        url: "/login",
        views:
        {
          "container@":
          {
            templateUrl: "partials/login",
            controller: "AuthController"
          }
        },
        onEnter: ["$state", "authService", function($state, authService)
        {
          if(authService.isLoggedIn())
          {
            $state.go("dashboard");
          }
        }]
      })
      .state("register",
      {
        parent: "root",
        url: "/register",
        views:
        {
          "container@":
          {
            templateUrl: "partials/register",
            controller: "AuthController"
          }
        },
        onEnter: ["$state", "authService", function($state, $authService)
        {
          if(authService.isLoggedIn())
          {
            $state.go("dashboard");
          }
        }]
      });
    }]);

  app.controller("AuthController", ["$scope", "$state", "authService",
    function($scope, $state, $authServie)
    {
      $scope.user = {};

      function register()
      {
        authService.register($scope.user).error(function(error)
        {
          $scope.error = error;
        }).then(function()
        {
          $state.go("dashboard");
        });
      }

      $scope.register = register;
      $scope.logIn = logIn;
    }
  ]);
})();
