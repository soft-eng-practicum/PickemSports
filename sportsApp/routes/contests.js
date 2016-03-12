(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var Matchup = mongoose.model("Matchup");
  var User = mongoose.model("User");

  router.get("/", function(req, res, next)
  {
    Contest.find(function(err, contests)
    {
      if(err) return next(err);
      res.json(contests);
    });
  });

  router.post("/contest/:matchupId"), function(err, res, results)
  {
    var value = Matchup.value;
    var pickHome = Matchup.id;
    var userId = User.id;

    if(matchupId.homeScore > matchupId.awayScore && value == "home")
    {
      User.points = User.points + 1;
    }
  }
  module.exports = router;
})();
