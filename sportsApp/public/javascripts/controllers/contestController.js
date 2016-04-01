(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("contest", {
      parent: "root",
      url: "/contests/:id",
      views: {
        "container@": {
          templateUrl: "partials/contests",
          controller: "ContestController"
        }
      }
    });
  }
]);

app.controller("ContestController", ["$scope","contestService", "$stateParams", function($scope, contestService, $stateParams) {
  var contest_id = $stateParams.id;
  $scope.contest = contestService.get({id: contest_id});
  console.log(contest_id);
}]);
})();
