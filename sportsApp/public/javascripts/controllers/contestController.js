(function() {
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("contest", {
      parent: "root",
      url: "/contests/{id}",
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
      $scope.hasMadePicks = true;
      contestService.participate(contest);
      angular.forEach($scope.contest.matchups, function(matchup) {
        $scope.selectedTeams.push(matchup.selectedTeam);
      });
      contestService.createEntry(contest._id, {
        contest: $scope.contest,
        user: authService.currentUserId(),
        selectedTeams: $scope.selectedTeams
      }).success(function(pick) {
        $scope.contest.picks.push(pick);
      });
    }

    function isParticipatedByCurrentUser(contest) {
      return contest.usersWhoJoined.indexOf(authService.currentUserId()) != -1;
    }

    function checkPicks(contest) {
      angular.forEach($scope.currentUser.selectedTeams, function(matchup) {
        if($scope.currentUser.selectedTeam === matchup.winningTeam) {
          $scope.currrentUser.points ++;
        }
      });
    }

    function showPicksToEnter() {
      $scope.hasMadePicks = false;
    }

    function hidePicksToEnter() {
      $scope.hasMadePicks = true;
    }

    $scope.isParticipatedByCurrentUser = isParticipatedByCurrentUser;
    $scope.submitPicks = submitPicks;
    $scope.checkPicks = checkPicks;
    $scope.showPicksToEnter = showPicksToEnter;
    $scope.hidePicksToEnter = hidePicksToEnter;
  }]);
})();
