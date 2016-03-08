(function()
{
	"use strict";

	var app = angular.module("sportsApp", [
		"sportsApp.controllers.main",
		"sportsApp.controllers.auth",
		"sportsApp.controllers.nav",
		"sportsApp.controllers.nba",
		"sportsApp.services.auth",
		"sportsApp.services.nba",
		"ui.router"
	]);

	app.config([
		"$stateProvider",
		"$urlRouterProvider",
		function($stateProvider, $urlRouterProvider)
		{
			$stateProvider.state("root",
			{
				abstract: true,
				views:
				{
					"header":
					{
						templateUrl: "partials/header",
						controller: "NavController"
					}
				}
			});
			$urlRouterProvider.otherwise("dashboard");
		}
	]);
})();
