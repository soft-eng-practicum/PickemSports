(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http",
  function($http)
  {
    var contestAPI = {};

    contestAPI.getFirst = function() {
      return $http.get("contests/1.json")
    }

    return contestAPI;

  }]);
})();
