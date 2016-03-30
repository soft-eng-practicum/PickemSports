(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");

  router.route("/contests")
    .get(function(req, res, next) {
      Contest.find(function(err, contests) {
        if(err) {
          return next(err);
        }

        Contest.populate(contests, {
          path: "matchups",
          select: "nbaTeams"
        }).then(function(contests) {
          res.json(contests);
        });
      });
    });

router.route("/contests/:contest")
  .get(function(req, res, next) {
    Contest.populate(contest, {
      path: "matchups",
    }).then(function(contest) {
      Matchups.populate(matchups, {
        path: "nbaTeams",
        select: "team"
      }).then(function(matchups) {
        res.json(contest);
      });
    });
  });

router.param("contest", function(req, res, next, _id) {
  var query = Contest.findById(_id);

  query.exec(function(err, contest) {
    if(err) {
      return next(err);
    }
    if(!contest) {
      return next(new Error("cannot find the contest"));
    }
    req.contest = contest;
    return next();
  });
});

  module.exports = router;
})();
