(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.nhl", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("nhl",
    {
      parent: "root",
      url: "/nhl",
      views: {
        "container@":
        {
          templateUrl: "partials/nhl",
        }
      }
    });
  }]);


})();
