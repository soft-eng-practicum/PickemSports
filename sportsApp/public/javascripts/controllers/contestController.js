(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("contests",
    {
      parent: "root",
      url: "/contests",
      views: {
        "container@":
        {
          templateUrl: "partials/contests.ejs",
          controller: "ContestController"
        }
      }
    })
    .state("contest",
    {
      url: "/contest",
      views: {
        "container@":
        {
          templateUrl: "partials/contest.ejs",
          controller: "ContestController"
        }
      }
    });
  }
]);

app.controller("ContestController", ["$scope","contestService", "$stateParams", "$filter",
function($scope, contestService, $stateParams, $filter)
{
  contestService.getFirst().success(function(data) {
    $scope.contest = data;
  })
}]);
})();
