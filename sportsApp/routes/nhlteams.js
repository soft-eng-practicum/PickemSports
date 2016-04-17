(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Nhlteam = mongoose.model("Nhlteam");

  router.get('/', function(req, res, next) {
    Nhlteam.find(function(err, nhlteams) {
      if(err) return next(err);
      res.json(nhlteams);
    });
  });

  module.exports = router;
})();
