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

  app.controller("ContestController", ["$scope","contest", "authService", "contestService", "moment", "$window", function($scope, contest, authService, contestService, moment, $window) {
    $scope.isLoggedIn = authService.isLoggedIn;
    $scope.contest = contest;
    $scope.selectedTeams = [];
    $scope.makeAvailable = false;
    $scope.currentPicks = [];

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

    function checkPicks() {
      var endTime = moment($scope.contest.end);
      var checkCount = 0;
      if(currentTime.isAfter(endTime) && checkCount == 0) {
        checkCount++;
        $scope.makeAvailable = true;
        console.log("Contest has ended, calculating results");
        angular.forEach($scope.contest.picks, function(pick) {
          angular.forEach(pick.selectedTeams, function(selectedTeam) {
            angular.forEach($scope.contest.matchups, function(matchup) {
              if(angular.equals(selectedTeam, matchup.matchupWinner) == true) {
                contestService.incrementPoints(contest, pick);
              }
            });
          });
        });
      };
    }

    function submitPicks() {
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
        $window.location.reload();
      });
    }

    function deletePicks() {
      angular.forEach($scope.contest.picks, function(pick) {
        if(pick.user._id == authService.currentUserId()) {
          contestService.deletePicks(contest._id, pick).success(function() {
            contest.picks.splice(contest.picks.indexOf(pick), 1);
            contest.usersWhoJoined.splice(contest.usersWhoJoined.indexOf(pick.user._id), 1);
            contest.particpants--;
        })
        $window.location.reload();
      };
    });
  }

  angular.forEach($scope.contest.picks, function(pick) {
    console.log(pick.user._id);
    if(pick.user._id == authService.currentUserId()) {
      $scope.showDeletePicks = true;
    } else {
      $scope.showDeletePicks = false;
    }
  });

  angular.forEach($scope.contest.picks, function(pick) {
    if(pick.user._id == authService.currentUserId()) {
      angular.forEach(pick.selectedTeams, function(selectedTeam) {
        console.log(selectedTeam);
        $scope.currentPicks.push(selectedTeam);
      });
    };
  });

    $scope.checkPicks = checkPicks;
    $scope.submitPicks = submitPicks;
    $scope.deletePicks = deletePicks;
}]);
})();
