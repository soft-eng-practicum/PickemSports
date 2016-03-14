(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.nfl", ["ui.router"]);
  

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("nfl",
    {
      parent: "root",
      url: "/nfl",
      views: {
        "container@":
        {
          templateUrl: "partials/nfl",
          
        }
      }
    });
  }]);
})();
