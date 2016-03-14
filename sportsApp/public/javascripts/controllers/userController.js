(function()
{
  "use strict";

  var app = angular.module("sportsApp.controllers.userpage", ["ui.router"]);

  app.config(["$stateProvider", function($stateProvider)
  {
    $stateProvider.state("userpage",
    {
      parent: "root",
      url: "/userpage",
      views: {
        "container@":
        {
          templateUrl: "partials/userpage",
          
        }
      }
    });
  }]);
})();
