(function() {
  "use strict";

  var app = angular.module("sportsApp.services.nhl", []);

  app.factory("nhlteams",
    function() {
      return [
        {logo: "stylesheets/nhllogos/ANA.jpg", abbr: "ANA", team: "Anaheim", mascot: "Ducks"},
        {logo: "stylesheets/nhllogos/ARZ.jpg", abbr: "ARI", team: "Arizona", mascot: "Coyotes"},
        {logo: "stylesheets/nhllogos/BOS.jpg", abbr: "BOS", team: "Boston", mascot: "Bruins"},
        {logo: "stylesheets/nhllogos/BUF.png", abbr: "BUF", team: "Buffalo", mascot: "Sabres"},
        {logo: "stylesheets/nhllogos/CAL.jpg", abbr: "CAL", team: "Calgary", mascot: "Flames"},
        {logo: "stylesheets/nhllogos/CAR.jpg", abbr: "CAR", team: "Carolina", mascot: "Hurricanes"},
        {logo: "stylesheets/nhllogos/CHI.jpg", abbr: "CHI", team: "Chicago", mascot: "Blackhawks"},
        {logo: "stylesheets/nhllogos/COL.png", abbr: "COL", team: "Colorado", mascot: "Avalanche"},
        {logo: "stylesheets/nhllogos/COLU.png", abbr: "CBJ", team: "Columbus", mascot: "Blue Jackets"},
        {logo: "stylesheets/nhllogos/DAL.jpg", abbr: "DAL", team: "Dallas", mascot: "Stars"},
        {logo: "stylesheets/nhllogos/DET.png", abbr: "DET", team: "Detroit", mascot: "Red Wings"},
        {logo: "stylesheets/nhllogos/EDM.jpg", abbr: "EDM", team: "Edmonton", mascot: "Oilers"},
        {logo: "stylesheets/nhllogos/FLA.jpg", abbr: "FLA", team: "Florida", mascot: "Panthers"},
        {logo: "stylesheets/nhllogos/LAK.png", abbr: "LA", team: "Los Angeles", mascot: "Kings"},
        {logo: "stylesheets/nhllogos/MIN.jpg", abbr: "MIN", team: "Minnesota", mascot: "Wild"},
        {logo: "stylesheets/nhllogos/MON.jpg", abbr: "MTL", team: "Montreal", mascot: "Canadiens"},
        {logo: "stylesheets/nhllogos/NASH.png", abbr: "NSH", team: "Milwaukee", mascot: "Predators"},
        {logo: "stylesheets/nhllogos/NJ.png", abbr: "NJ", team: "New Jersey", mascot: "Devils"},
        {logo: "stylesheets/nhllogos/NYI.png", abbr: "NYI", team: "New York", mascot: "Islanders"},
        {logo: "stylesheets/nhllogos/NYR.png", abbr: "NYR", team: "New York", mascot: "Rangers"},
        {logo: "stylesheets/nhllogos/OTT.png", abbr: "OTW", team: "Ottawa", mascot: "Senators"},
        {logo: "stylesheets/nhllogos/PHI.png", abbr: "PHI", team: "Philadelphia", mascot: "Flyers"},
        {logo: "stylesheets/nhllogos/PITT.png", abbr: "PIT", team: "Pittsburgh", mascot: "Penguins"},
        {logo: "stylesheets/nhllogos/SJ.png", abbr: "SJ", team: "San Jose", mascot: "Sharks"},
        {logo: "stylesheets/nhllogos/STL.jpg", abbr: "STL", team: "St. Louis", mascot: "Blues"},
        {logo: "stylesheets/nhllogos/TB.png", abbr: "TB", team: "Tampa Bay", mascot: "Lightning"},
        {logo: "stylesheets/nhllogos/TOR.png", abbr: "TOR", team: "Toronto", mascot: "Maple Leafs"},
        {logo: "stylesheets/nhllogos/VAN.jpg", abbr: "VAN", team: "Vancouver", mascot: "Canucks"},
        {logo: "stylesheets/nhllogos/WAS.png", abbr: "WAS", team: "Washington", mascot: "Capitals"},
        {logo: "stylesheets/nhllogos/WINN.png", abbr: "WPG", team: "Winnipeg", mascot: "Jets"}
      ];
    });
})();
