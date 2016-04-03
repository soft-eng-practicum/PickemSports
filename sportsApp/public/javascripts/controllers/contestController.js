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

  function incrementParticipants(contest) {
    contestService.participate(contest);
  }

  function isParticipatedByCurrentUser(contest) {
    return contest.usersWhoJoined.indexOf(authService.currentUserId()) != -1;
  }

  $scope.incrementParticipants = incrementParticipants;
  $scope.isParticipatedByCurrentUser = isParticipatedByCurrentUser;
}]);
})();
