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

  app.controller("ContestController", ["$scope","contest", "authService", "contestService", "moment", function($scope, contest, authService, contestService, moment) {
    $scope.isLoggedIn = authService.isLoggedIn;
    $scope.contest = contest;
    $scope.selectedTeams = [];

    // Check to see if the user has made picks
    angular.forEach($scope.contest.usersWhoJoined, function(user) {
      console.log(angular.equals(user._id, authService.currentUserId()));
      if(angular.equals(user._id, authService.currentUserId()) == true) {
        $scope.madePicks = true;
        $scope.buttonDisabled = true;
      } else {
        $scope.madePicks = false;
      }
    });

    // Check to see if the contest had already started
    var currentTime = moment();
    console.log(currentTime);
    var startTime = moment($scope.contest.start);
    console.log(startTime);
    if(currentTime.isAfter(startTime)) {
      console.log("Contest has already begun");
      $scope.madePicks = true;
      $scope.buttonDisabled = true;
    };

    function submitPicks() {
      console.log($scope.user);
      $scope.buttonDisabled = true;
      angular.forEach($scope.contest.matchups, function(matchup) {
        $scope.selectedTeams.push(matchup.selectedTeam);
      });
      contestService.createEntry(contest._id, {
        contest: $scope.contest,
        user: authService.currentUserId(),
        selectedTeams: $scope.selectedTeams
      }).success(function(pick) {
        $scope.contest.picks.push(pick);
        contestService.participate(contest);
      });
    }

    function checkPicks(pick) {
      angular.forEach($scope.contest.matchups, function(matchup) {
        angular.forEach(pick.selectedTeams, function(selectedTeam) {
          if(angular.equals(matchup.winningTeam, pick.selectedTeam) === true) {
            contestService.incrementUserPoints(contest._id);
          }
        });
      });
    }

    $scope.submitPicks = submitPicks;
    $scope.checkPicks = checkPicks;
}]);
})();
