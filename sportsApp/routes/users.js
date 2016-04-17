(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var User = mongoose.model("User");
  var jwt = require("express-jwt");
  var auth = jwt({
      secret: "SECRET",
      userProperty: "payload"
    });

  router.param("user", function(req, res, next, id) {
    var query = User.findById(id);
    query.exec(function(err, user) {
      if(err) {
        return next(err);
      }

      if(!user) {
        return next(new Error("Can't find user."));
      }

      req.user = user;
      return next();
    });
  });

  router.route("/users")
    .get(auth, function(req, res, next) {
      User.find(function(err, users) {
        if(err) {
          return next(err);
        }
        res.json(users);
      });
    });

  router.route("/users/:user")
    .get(auth, function(req, res, next) {
      res.json(req.user);
    });

  module.exports = router;
})();
