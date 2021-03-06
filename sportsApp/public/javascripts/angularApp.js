(function() {
	"use strict";

	var app = angular.module("sportsApp", [
		"sportsApp.controllers.main",
		"sportsApp.controllers.auth",
		"sportsApp.controllers.nav",
		"sportsApp.controllers.nba",
		"sportsApp.controllers.nfl",
		"sportsApp.controllers.mlb",
		"sportsApp.controllers.nhl",
		"sportsApp.controllers.nfl",
		"sportsApp.controllers.contest",
		"sportsApp.controllers.list",
		"sportsApp.services.auth",
		"sportsApp.services.nba",
		"sportsApp.services.mlb",
		"sportsApp.services.nhl",
		"sportsApp.services.nfl",
		"sportsApp.services.contest",
		"ui.router",
		"angularMoment"
	]);

	app.config([
		"$stateProvider",
		"$urlRouterProvider",
		function($stateProvider, $urlRouterProvider) {
			$stateProvider.state("root", {
				abstract: true,
				views: {
					"header": {
						templateUrl: "partials/header",
						controller: "NavController"
					}
				}
			});
			$urlRouterProvider.otherwise("dashboard");
		}
	]);
})();
