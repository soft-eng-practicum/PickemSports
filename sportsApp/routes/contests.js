(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var User = mongoose.model("User");
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
        return next(new Error("cant find the contest"));
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
      Contest.findOne({id: req.params.id}, function(err, contest) {
        if(err) {
          return next(err);
        }
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

  module.exports = router;
})();
