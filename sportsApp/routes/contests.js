(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");
  var bodyParser = require('body-parser');

  router.route("/contests")
    .get(function(req, res, next) {
      Contest.find(function(err, contests) {
        if(err) return next(err);
        res.send(contests);
      });
    });

  router.route("/contests/:id")
    .get(function(req, res, next) {
      Contest.findById(req.params.id, function(err, contest) {
        if(err) return next(err);
        res.send(contest);
      });
    });

  module.exports = router;
})();
