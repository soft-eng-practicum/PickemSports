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

app.controller("ContestController", ["$scope","contestService",
function($scope, contestService)
{
  $scope.contest = contestService.query();
}]);
})();
