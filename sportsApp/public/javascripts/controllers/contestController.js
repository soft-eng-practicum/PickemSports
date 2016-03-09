(function ()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("contest",
    {
      parent: "root",
      url: "/contest/{id}",
      views:
      {
        "container@":
        {
          templateUrl: "partials/contest",
          controller: "ContestController"
        }
      }
      resolve:
      {
        contest: [
          "$stateParams", "contestService",
          function($stateParams, contestService)
          {
            return contestService.get($stateParams.id);
          }
        ]
      }
    });
  }
]);

app.controller("ContestController", ["$scope", "contestService", "contests",
"authService", function($scope, contestService, contests, authService)
{
  $scope.isLoggedIn = authService.isLoggedIn;
  $scope.contests = contests;

  function userPickMatchup(matchup)
}
)]
})
