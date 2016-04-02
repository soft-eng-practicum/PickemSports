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
      },
      resolve: {
  contest: [
    "$stateParams",
    "contestService",
    function($stateParams, contestService) {
      return contestService.get($stateParams.id);
    }
  ]
}
    });
  }
]);

app.controller("ContestController", ["$scope","contest", "$stateParams", function($scope, contest, $stateParams) {
  // Routing info
  $scope.contest = contest;
}]);
})();
