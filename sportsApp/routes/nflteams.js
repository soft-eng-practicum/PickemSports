(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Nflteam = mongoose.model("Nflteam");

  router.get('/', function(req, res, next) {
    Nflteam.find(function(err, nflteams) {
      if(err) return next(err);
      res.json(nflteams);
    });
  });

  module.exports = router;
})();
