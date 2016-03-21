(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var Matchup = mongoose.model("Matchup");
  var User = mongoose.model("User");

router.route("/contest")
  .get("/public/api/firstContestList.json"), function(req, res)
    {
      Matchup.find(function (err, matchups) {
        if (err)
        res.send(err);

        res.json(matchups);
      });
    };

  module.exports = router;
})();
