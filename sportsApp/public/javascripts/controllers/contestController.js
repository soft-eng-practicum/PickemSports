(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("contest", {
      parent: "root",
      url: "/contests/{_id}",
      views: {
        "container@": {
          templateUrl: "partials/contests",
          controller: "ContestController"
        }
      },
      resolve: {
        contest: [
          "$stateParams", "contestService", function($stateParams, contestService) {
            return contestService.get($stateParams._id);
          }
        ]
      }
    });
  }
]);

app.controller("ContestController", ["$scope","contestService", "contest", function($scope, contestService, contest) {
  $scope.contest = contest;
}]);
})();
