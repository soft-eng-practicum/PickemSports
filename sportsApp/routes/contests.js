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
  var db = mongoose.connection;

  router.route("/contests")
    .get(function(req, res, next) {
      Contest.find(function(err, contests) {
        if(err) {
          return next(err);
        }
        res.json(contests);
      });
    });

  router.route("/contests/:id")
    .get(function(req, res, next) {
      Contest.findOne({id: req.params.id}, function(err, contest) {
        if(err) {
          return next(err);
        }
        res.json(contest);
    });
  });

  router.route("/contests/:id/participate")
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
