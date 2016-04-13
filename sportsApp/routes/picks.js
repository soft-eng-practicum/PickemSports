(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");

  var Pick = mongoose.model("Pick");
  var Contest = mongoose.model("Contest");
  var User = mongoose.model("User");

  var jwt = require("express-jwt");
  var auth = jwt({
  secret: "SECRET",
  userProperty: "payload"
  });

  router.param("pick", function(req, res, next, id) {
    var query = Pick.findById(id);

    query.exec(function(err, pick) {
      if(err) {
        return next(err);
      }
      if(!pick) {
        return next(new Error("cannot find that pick"));
      }
      req.pick = pick;
      return next();
    });
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

  router.route("/contests/:contest/picks")
    .post(auth, function(req, res, next) {
      var pick = new Pick();
      pick.contest = req.contest;
      pick.user = req.payload._id;
      pick.selectedTeams = req.body;

      pick.save(function(err, res) {
        if(err) {
          console.log(err);
          res.send({
            message: 'Something went wrong'
          });
        } else {
          res.send({
            message: 'The pick has been saved'
          });
        }

        Pick.populate(pick, {
          path: "user",
          select: "username"
        }).then(function(pick) {
          res.json(pick);
        });
      })
    });

  module.exports = router;
})();
