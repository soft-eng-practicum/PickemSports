(function() {
  "use strict";

  var app = angular.module("sportsApp.services.mlb", []);

  app.factory("mlbteams",
    function() {
      return [
        {logo: "stylesheets/mlblogos/ARI.gif", abbr: "ARI", team: "Arizona", mascot: "Diamondbacks"},
        {logo: "stylesheets/mlblogos/Atlanta Braves.jpg", abbr: "ATL", team: "Atlanta", mascot: "Braves"},
        {logo: "stylesheets/mlblogos/BAL.jpg", abbr: "BAL", team: "Baltimore", mascot: "Orioles"},
        {logo: "stylesheets/mlblogos/Boston Red Sox.jpg", abbr: "BOS", team: "Boston", mascot: "Red Sox"},
        {logo: "stylesheets/mlblogos/Chicago Cubs.jpg", abbr: "CHI", team: "Chicago", mascot: "Cubs"},
        {logo: "stylesheets/mlblogos/CWS.jpg", abbr: "CWS", team: "Chicago", mascot: "White Sox"},
        {logo: "stylesheets/mlblogos/CIN.jpeg", abbr: "CIN", team: "Cincinnati", mascot: "Reds"},
        {logo: "stylesheets/mlblogos/Cleveland Indians.jpg", abbr: "CLE", team: "Cleveland", mascot: "Indians"},
        {logo: "stylesheets/mlblogos/COL.jpg", abbr: "COL", team: "Colorado", mascot: "Rockies"},
        {logo: "stylesheets/mlblogos/DET.jpg", abbr: "DET", team: "Detroit", mascot: "Tigers"},
        {logo: "stylesheets/mlblogos/Florida Marlins.jpg", abbr: "MIA", team: "Miami", mascot: "Marlins"},
        {logo: "stylesheets/mlblogos/HOU.jpg", abbr: "HOU", team: "Houston", mascot: "Astros"},
        {logo: "stylesheets/mlblogos/KC.png", abbr: "KC", team: "Kansas City", mascot: "Royals"},
        {logo: "stylesheets/mlblogos/LAD.jpg", abbr: "LAD", team: "Los Angeles", mascot: "Dodgers"},
        {logo: "stylesheets/mlblogos/Los Angeles Angels.jpg", abbr: "LAA", team: "Los Angeles", mascot: "Angels"},
        {logo: "stylesheets/mlblogos/Milwaukee Brewers.jpg", abbr: "MIL", team: "Milwaukee", mascot: "Brewers"},
        {logo: "stylesheets/mlblogos/MINN.png", abbr: "MIN", team: "Minnesota", mascot: "Twins"},
        {logo: "stylesheets/mlblogos/New York Mets.jpg", abbr: "NYM", team: "New York", mascot: "Mets"},
        {logo: "stylesheets/mlblogos/NYY.jpg", abbr: "NYY", team: "New York", mascot: "Yankees"},
        {logo: "stylesheets/mlblogos/Oakland Athletics.jpg", abbr: "OAK", team: "Oakland", mascot: "Athletics"},
        {logo: "stylesheets/mlblogos/PHI.jpg", abbr: "PHI", team: "Philadelphia", mascot: "Phillies"},
        {logo: "stylesheets/mlblogos/PITT.png", abbr: "PITT", team: "Pittsburgh", mascot: "Pirates"},
        {logo: "stylesheets/mlblogos/SD.png", abbr: "SD", team: "San Diego", mascot: "Padres"},
        {logo: "stylesheets/mlblogos/Seattle Mariners.jpg", abbr: "SEA", team: "Seattle", mascot: "Mariners"},
        {logo: "stylesheets/mlblogos/SF.png", abbr: "SF", team: "San Fransisco", mascot: "Giants"},
        {logo: "stylesheets/mlblogos/St. Louis Cardinals.jpg", abbr: "STL", team: "St. Louis", mascot: "Cardinals"},
        {logo: "stylesheets/mlblogos/Tampa Bay Rays.jpg", abbr: "TB", team: "Tampa", mascot: "Rays"},
        {logo: "stylesheets/mlblogos/Texas Rangers.jpg", abbr: "TEX", team: "Texas", mascot: "Rangers"},
        {logo: "stylesheets/mlblogos/TOR.jpg", abbr: "TOR", team: "Toronto", mascot: "Blue Jays"},
        {logo: "stylesheets/mlblogos/Washington Nationals.jpg", abbr: "WAS", team: "Washington", mascot: "Nationals"}
      ];
    });
})();
