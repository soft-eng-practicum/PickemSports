(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$resource", function($resource)
  {
    return $resource("api/firstContestList/:matchupId.json", {matchupId: "@id"});
  }]);
})();
