(function() {
  "use strict";

  var app = angular.module("sportsApp.services.nfl", []);

  app.factory("nflteams",
    function() {
      return [
        {logo: "stylesheets/nfllogos/ARZ.png", abbr: "ARZ", team: "Arizona", mascot: "Cardinals"},
        {logo: "stylesheets/nfllogos/ATL.jpg", abbr: "ATL", team: "Atlanta", mascot: "Falcons"},
        {logo: "stylesheets/nfllogos/BAL.jpg", abbr: "BAL", team: "Baltimore", mascot: "Ravens"},
        {logo: "stylesheets/nfllogos/BUF.png", abbr: "BUF", team: "Buffalo", mascot: "Bills"},
        {logo: "stylesheets/nfllogos/CAR.png", abbr: "CAR", team: "Carolina", mascot: "Panthers"},
        {logo: "stylesheets/nfllogos/CHI.jpg", abbr: "CHI", team: "Chicago", mascot: "Bears"},
        {logo: "stylesheets/nfllogos/CIN.png", abbr: "CIN", team: "Cincinnati", mascot: "Bengals"},
        {logo: "stylesheets/nfllogos/CLE.png", abbr: "CLE", team: "Cleveland", mascot: "Browns"},
        {logo: "stylesheets/nfllogos/DAL.png", abbr: "DAL", team: "Dallas", mascot: "Cowboys"},
        {logo: "stylesheets/nfllogos/DEN.jpg", abbr: "DEN", team: "Denver", mascot: "Broncos"},
        {logo: "stylesheets/nfllogos/DET.png", abbr: "DET", team: "Detroit", mascot: "Lions"},
        {logo: "stylesheets/nfllogos/GB.png", abbr: "GB", team: "Green Bay", mascot: "Packers"},
        {logo: "stylesheets/nfllogos/HOU.png", abbr: "HOU", team: "Houston", mascot: "Texans"},
        {logo: "stylesheets/nfllogos/IND.png", abbr: "IND", team: "Indianapolis", mascot: "Colts"},
        {logo: "stylesheets/nfllogos/JAX.png", abbr: "JAX", team: "Jacksonville", mascot: "Jaguars"},
        {logo: "stylesheets/nfllogos/KC.png", abbr: "KC", team: "Kansas City", mascot: "Chiefs"},
        {logo: "stylesheets/nfllogos/LA.jpg", abbr: "LA", team: "Los Angeles", mascot: "Rams"},
        {logo: "stylesheets/nfllogos/MIA.png", abbr: "MIA", team: "Miami", mascot: "Dolphins"},
        {logo: "stylesheets/nfllogos/MIN.jpg", abbr: "MIN", team: "Minnesota", mascot: "Vikings"},
        {logo: "stylesheets/nfllogos/NE.jpg", abbr: "NE", team: "New England", mascot: "Patriots"},
        {logo: "stylesheets/nfllogos/NO.png", abbr: "NO", team: "New Orleans", mascot: "Saints"},
        {logo: "stylesheets/nfllogos/NYG.png", abbr: "NYG", team: "New York", mascot: "Giants"},
        {logo: "stylesheets/nfllogos/NYJ.png", abbr: "NYJ", team: "New York", mascot: "Jets"},
        {logo: "stylesheets/nfllogos/OAK.png", abbr: "OAK", team: "Oakland", mascot: "Raiders"},
        {logo: "stylesheets/nfllogos/PHI.jpeg", abbr: "PHI", team: "Philadelphia", mascot: "Eagles"},
        {logo: "stylesheets/nfllogos/PIT.png", abbr: "PIT", team: "Pittsburgh", mascot: "Steelers"},
        {logo: "stylesheets/nfllogos/SD.jpg", abbr: "SD", team: "San Diego", mascot: "Chargers"},
        {logo: "stylesheets/nfllogos/SEA.jpg", abbr: "SEA", team: "Seattle", mascot: "Seahawks"},
        {logo: "stylesheets/nfllogos/SF.png", abbr: "SF", team: "San Fransisco", mascot: "49ers"},
        {logo: "stylesheets/nfllogos/TB.png", abbr: "TB", team: "Tampa Bay", mascot: "Buccuaneers"},
        {logo: "stylesheets/nfllogos/TENN.png", abbr: "TEN", team: "Tennessee", mascot: "Titans"},
        {logo: "stylesheets/nfllogos/WASH.png", abbr: "WAS", team: "Washington", mascot: "Redskins"}
      ];
    });
})();
