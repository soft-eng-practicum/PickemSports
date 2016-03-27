(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.contest", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("contests",
    {
      parent: "root",
      url: "/contests",
      views: {
        "container@":
        {
          templateUrl: "partials/contests.ejs",
          controller: "ContestListController"
        }
      }
    })
    .state("contest",
    {
      parent: "root",
      url: "/contest/:contestId",
      views: {
        "container@":
        {
          templateUrl: "partials/contest.ejs",
          controller: "ContestController"
        }
      }
    });
  }
]);

app.controller("ContestListController", ["$scope", "contestService", function($scope, contestService)
{
  contestService.get().success(function (data) {
    $scope.contests = data;
  });
}]);

app.controller("ContestController", ["$scope","contestService", "$stateParams", "$filter",
function($scope, contestService, $stateParams, $filter)
{
  $scope._id = $stateParams.contestId;
  contestService.get().success(function (data) {
    $scope.contest = $filter('filter')(data, {id: parseInt($scope._id)}, true, [0]);
      });
}]);
})();
