(function() {
  "use strict";

  var app = angular.module("sportsApp.controllers.list", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("contestList", {
      parent: "root",
      url: "/contestList",
      views: {
        "container@": {
          templateUrl: "partials/contestList",
          controller: "ListController"
        }
      },
      resolve: {
        getContestsPromise: [
          "contestService", function(contestService) {
            return contestService.getAll();
          }
        ]
      }
    });
  }]);

  app.controller("ListController", ["$scope", "authService", "contestService",
  function($scope, authService, contestService) {
    $scope.isLoggedIn = authService.isLoggedIn;
    $scope.contests = contestService.contests;
    $scope.ended = false;

    angular.forEach($scope.contests, function(contest) {
      var now = moment();
      var end = moment(contest.end);
      console.log(now.isAfter(end));

      if(now.isAfter(end) == true) {
        contest.isChecked = true;
      }
    });
  }
]);
})();
