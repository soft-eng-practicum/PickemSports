(function ()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("contest",
    {
      parent: "root",
      url: "/contest",
      views: {
        "container@":
        {
          templateUrl: "partials/contest",
          controller: "ContestController"
        }
      }
    });
  }
]);

app.controller("ContestController", ["$scope","contestService",
function($scope, contestService)
{
  $scope.contest = contestService.getMatchups()
  .then(function (matchups) {
    $scope.contest = matchups;
  }, function (error) {
    console.error(error);
  })

  $scope.matchup = {
    selectedTeam: null
  };


    $scope.isAvailable = function() {
      var now = moment(new Date()).format("hh:mm:ss a");
      var start = moment("01:30:00 pm", "hh:mm:ss a");
      if(start > now) {
        return false;
      }
      else {
        return true;
        }
  };
}]);
})();
