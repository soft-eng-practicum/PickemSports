(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http",
  function($http)
  {
    var contestAPI = {};

    contestAPI.get = function() {
      return $http.get("api/firstContestList.json")
    }

    return contestAPI;

  }]);
})();
