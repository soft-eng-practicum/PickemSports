(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var Matchup = mongoose.model("Matchup");
  var User = mongoose.model("User");

router.route("/contests")
  .get(function(req, res, next)
    {
      Contest.find(function(err, contests) {
        if(err) {
          return next(err);
        }
        response.json(contests);
      });
    });

  module.exports = router;
})();
