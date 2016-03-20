(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.nba", []);

  app.factory("nbateams",
    function()
    {
      return [
        {logo: "stylesheets/nbalogos/atl-hawks.png", abbr: "ATL", team: "Atlanta", mascot: "Hawks"},
        {logo: "stylesheets/nbalogos/BOS_Celtics.png", abbr: "BOS", team: "Boston", mascot: "Celtics"},
        {logo: "stylesheets/nbalogos/BKN-Nets.png", abbr: "BKN", team: "Brooklyn", mascot: "Nets"},
        {logo: "stylesheets/nbalogos/CHA-Horn.png", abbr: "CHA", team: "Charlotte", mascot: "Hornets"},
        {logo: "stylesheets/nbalogos/CHI-Bulls.png", abbr: "CHI", team: "Chicago", mascot: "Bulls"},
        {logo: "stylesheets/nbalogos/CLE-Cavs.jpg", abbr: "CLE", team: "Cleveland", mascot: "Cavaliers"},
        {logo: "stylesheets/nbalogos/Dallas-Mavericks.png", abbr: "DAL", team: "Dallas", mascot: "Mavericks"},
        {logo: "stylesheets/nbalogos/DEN-Nugs.png", abbr: "DEN", team: "Denver", mascot: "Nuggets"},
        {logo: "stylesheets/nbalogos/DET.png", abbr: "DET", team: "Detroit", mascot: "Pistons"},
        {logo: "stylesheets/nbalogos/GSW.png", abbr: "GS", team: "Golden State", mascot: "Warriors"},
        {logo: "stylesheets/nbalogos/HOU-Rock.png", abbr: "HOU", team: "Houston", mascot: "Rockets"},
        {logo: "stylesheets/nbalogos/IND-Pacers.png", abbr: "IND", team: "Indiana", mascot: "Pacers"},
        {logo: "stylesheets/nbalogos/LAC.jpg", abbr: "LAC", team: "Los Angeles", mascot: "Clippers"},
        {logo: "stylesheets/nbalogos/LAL.jpg", abbr: "LAL", team: "Los Angeles", mascot: "Lakers"},
        {logo: "stylesheets/nbalogos/Memphis-Grizzlies.png", abbr: "MEM", team: "Memphis", mascot: "Grizzlies"},
        {logo: "stylesheets/nbalogos/MIA-Heat.png", abbr: "MIA", team: "Miami", mascot: "Heat"},
        {logo: "stylesheets/nbalogos/MIL-Bucks.png", abbr: "MIL", team: "Milwaukee", mascot: "Bucks"},
        {logo: "stylesheets/nbalogos/MIN-Timber.png", abbr: "MIN", team: "Minnesota", mascot: "Timberwolves"},
        {logo: "stylesheets/nbalogos/NO-Pelicans.png", abbr: "NO", team: "New Orleans", mascot: "Pelicans"},
        {logo: "stylesheets/nbalogos/NYK.jpg", abbr: "NY", team: "New York", mascot: "Knicks"},
        {logo: "stylesheets/nbalogos/OKC-Thunder.png", abbr: "OKC", team: "Oklahoma City", mascot: "Thunder"},
        {logo: "stylesheets/nbalogos/ORL-Magic.png", abbr: "ORL", team: "Orlando", mascot: "Magic"},
        {logo: "stylesheets/nbalogos/76ers.jpg", abbr: "PHI", team: "Philadelphia", mascot: "76ers"},
        {logo: "stylesheets/nbalogos/Pheonix-Suns.jpg", abbr: "PHO", team: "Pheonix", mascot: "Suns"},
        {logo: "stylesheets/nbalogos/Portland-Trail-Blazers-Logo.png", abbr: "POR", team: "Portland", mascot: "Trailblazers"},
        {logo: "stylesheets/nbalogos/Sacremento-Kings.jpg", abbr: "SAC", team: "Sacremento", mascot: "Kings"},
        {logo: "stylesheets/nbalogos/spurs.png", abbr: "SA", team: "San Antonio", mascot: "Spurs"},
        {logo: "stylesheets/nbalogos/TOR-Raptors.png", abbr: "TOR", team: "Toronto", mascot: "Raptors"},
        {logo: "stylesheets/nbalogos/Utah-Jazz.jpg", abbr: "UTA", team: "Utah", mascot: "Jazz"},
        {logo: "stylesheets/nbalogos/WAS-Wiz.png", abbr: "WAS", team: "Washington", mascot: "Wizards"}
      ];
    });
})();
