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
        res.json(contests);
      });
    });

router.route("/contests/:id")
  .get(function(req, res, next) {
    Contest.findOne({id: req.params.id}, function(err, contest) {
      if(err) {
        res.send(err);
      }
      res.json(contest);
  });
});

  module.exports = router;
})();
