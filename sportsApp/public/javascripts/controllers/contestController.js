(function() {
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

app.controller("ContestController", ["$scope","contest", "authService", "contestService", function($scope, contest, authService, contestService) {
  $scope.isLoggedIn = authService.isLoggedIn;
  $scope.contest = contest;
  $scope.selectedTeams = [];

  function submitPicks() {
    $scope.buttonDisabled = true;
    angular.forEach($scope.contest.matchups, function(matchup) {
      $scope.selectedTeams.push(matchup.selectedTeam);
    });
  }

  function incrementParticipants(contest) {
    contestService.participate(contest);
  }

  function isParticipatedByCurrentUser(contest) {
    return contest.usersWhoJoined.indexOf(authService.currentUserId()) != -1;
  }

  function getUsersWhoJoined(contest) {
    return contest.usersWhoJoined;
  }

  $scope.incrementParticipants = incrementParticipants;
  $scope.isParticipatedByCurrentUser = isParticipatedByCurrentUser;
  $scope.getUsersWhoJoined = getUsersWhoJoined;
  $scope.submitPicks = submitPicks;
}]);
})();
