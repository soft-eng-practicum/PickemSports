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

app.controller("ContestController", ["$scope","contest", "authService", function($scope, contest, authService) {
  $scope.isLoggedIn = authService.isLoggedIn;
  $scope.contest = contest;

  $scope.pickMatchup = function(selectedTeam) {
    var team = '';
    if(selectedTeam === 'home') {
      team = this.matchup.home;
    } else if (selectedTeam === 'away') {
      team = this.matchup.away;
    }

  }
}]);
})();
