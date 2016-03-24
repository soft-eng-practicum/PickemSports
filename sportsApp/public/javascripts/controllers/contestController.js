(function ()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("contest",
    {
      parent: "root",
      url: "/contest",
      views: {
        "container@":
        {
          templateUrl: "partials/contest",
          controller: "ContestController"
        }
      }
    });
  }
]);

app.controller("ContestController", ["$scope","contestService", "authService",
function($scope, contestService, authService)
{

  $scope.contest = contestService.getMatchups()
  .then(function (matchups) {
    $scope.contest = matchups;
  }, function (error) {
    console.error(error);
  })

  $scope.isLoggedIn = authService.isLoggedIn;
  $scope.user = authService.currentUser();

}]);
})();
