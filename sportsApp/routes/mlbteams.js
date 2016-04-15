(function() {
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Mlbteam = mongoose.model("Mlbteam");

  router.get('/', function(req, res, next) {
    Mlbteam.find(function(err, mlbteams) {
      if(err) return next(err);
      res.json(mlbteams);
    });
  });

  module.exports = router;
})();
