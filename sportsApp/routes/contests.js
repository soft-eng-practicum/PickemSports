(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var User = mongoose.model("User");
  var Pick = mongoose.model("Pick");
  var jwt = require("express-jwt");
  var auth = jwt({
    secret: "SECRET",
    userProperty: "payload"
  });

  router.param("contest", function(req, res, next, id) {
    var query = Contest.findById(id);

    query.exec(function(err, contest) {
      if(err) {
        return next(err);
      }
      if(!contest) {
        return next(new Error("cannot find that contest"));
      }
      req.contest = contest;
      return next();
    });
  });

  router.route("/contests")
    .get(function(req, res, next) {
      Contest.find(function(err, contests) {
        if(err) {
          return next(err);
        }
        res.json(contests);
      });
    });

  router.route("/contests/:contest")
    .get(function(req, res, next) {
      Contest.populate(req.contest, {
        path: "usersWhoJoined",
        select: "username"
      }).then(function(contest) {
        res.json(contest);
      });
  });

  router.route("/contests/:contest/participate")
    .put(auth, function(req, res, next) {
      req.contest.participate(req.payload, function(err, contest) {
        if(err) {
          return next(err);
        }
        Contest.populate(contest, {
          path: "usersWhoJoined",
          select: "username"
        }).then(function(contest) {
          res.json(contest);
        });
      });
    });

  router.route("/contests/:contest/picks")
    .post(auth, function(req, res, next) {
      var pick = new Pick(req.body);

      pick.save(function(err, pick) {
        if(err) {
          return next(err);
        }
        req.contest.picks.push(pick);
        req.contest.save(function(err, contest) {
          if(err) {
            return next(err);
          }

          Pick.populate(pick, {
            path: "user",
            select: "username"
          }).then(function(pick) {
            res.json(pick);
          });
        })
      })
  });

  module.exports = router;
})();
