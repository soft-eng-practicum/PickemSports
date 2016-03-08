(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.nba", []);

  app.factory("nbateams",
    function()
    {
      return [
        {abbr: "ATL", team: "Atlanta", mascot: "Hawks"},
        {abbr: "BOS", team: "Boston", mascot: "Celtics"},
        {abbr: "BKN", team: "Brooklyn", mascot: "Nets"},
        {abbr: "CHA", team: "Charlotte", mascot: "Hornets"},
        {abbr: "CHI", team: "Chicago", mascot: "Bulls"},
        {abbr: "CLE", team: "Cleveland", mascot: "Cavaliers"},
        {abbr: "DAL", team: "Dallas", mascot: "Mavericks"},
        {abbr: "DEN", team: "Denver", mascot: "Nuggets"},
        {abbr: "DET", team: "Detroit", mascot: "Pistons"},
        {abbr: "GS", team: "Golden State", mascot: "Warriors"},
        {abbr: "HOU", team: "Houston", mascot: "Rockets"},
        {abbr: "IND", team: "Indiana", mascot: "Pacers"},
        {abbr: "LAC", team: "Los Angeles", mascot: "Clippers"},
        {abbr: "LAL", team: "Los Angeles", mascot: "Lakers"},
        {abbr: "MEM", team: "Memphis", mascot: "Grizzlies"},
        {abbr: "MIA", team: "Miami", mascot: "Heat"},
        {abbr: "MIL", team: "Milwaukee", mascot: "Bucks"},
        {abbr: "MIN", team: "Minnesota", mascot: "Timberwolves"},
        {abbr: "NO", team: "New Orleans", mascot: "Pelicans"},
        {abbr: "NY", team: "New York", mascot: "Knicks"},
        {abbr: "OKC", team: "Oklahoma City", mascot: "Thunder"},
        {abbr: "ORL", team: "Orlando", mascot: "Magic"},
        {abbr: "PHI", team: "Philadelphia", mascot: "76ers"},
        {abbr: "PHO", team: "Pheonix", mascot: "Suns"},
        {abbr: "POR", team: "Portland", mascot: "Trailblazers"},
        {abbr: "SAC", team: "Sacremento", mascot: "Kings"},
        {abbr: "SA", team: "San Antonio", mascot: "Spurs"},
        {abbr: "TOR", team: "Toronto", mascot: "Raptors"},
        {abbr: "UTA", team: "Utah", mascot: "Jazz"},
        {abbr: "WAS", team: "Washington", mascot: "Wizards"}
      ];
    });
})();
