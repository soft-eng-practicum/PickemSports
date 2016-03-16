(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http","$q",
  function($http, $q)
  {
    return {
      getMatchups: function()
      {
        var deffered = $q.defer(),
        httpPromise = $http.get("api/firstContestList.json");

        httpPromise.success(function (matchups) {
          deffered.resolve(matchups);
        })
        .error(function (error) {
          console.error("Error: " + error)
        });
        return deffered.promise;
      }
    };
  }]);
})();
