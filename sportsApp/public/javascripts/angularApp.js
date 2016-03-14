(function()
{
	"use strict";

	var app = angular.module("sportsApp", [
		"sportsApp.controllers.main",
		"sportsApp.controllers.userpage",
		"sportsApp.controllers.auth",
		"sportsApp.controllers.nav",
		"sportsApp.controllers.nba",
		"sportsApp.controllers.mlb",
		"sportsApp.controllers.nhl",
		"sportsApp.controllers.contest",
		"sportsApp.services.auth",
		"sportsApp.services.nba",
		"sportsApp.services.contest",
		"ui.router",
		"ngResource"
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
