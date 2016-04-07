(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Pick = mongoose.model("Pick");
  var Contest = mongoose.model("Contest");
  var User = mongoose.model("User";)
  var jwt = require("express-jwt");
  var auth = jwt({
  secret: "SECRET",
  userProperty: "payload"
  });

  router.route('/contests/:contest/picks')
    .post(auth, function(req, res, next) {
      var pick = new pick(req.body);
      pick.contest = req.contest;

      // req.contest.picks.push(pick);
      pick.save(function(err, pick) {
        if(err) {
          return next(err);
        }

        Pick.populate(pick, {
          path: "user",
          select: "username"
        }).then(function(pick) {
          res.json(pick);
        });
      });
    });
  });

  module.exports = router;
})();
