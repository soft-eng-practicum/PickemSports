(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Contest = mongoose.model("Contest");

  router.get("/", function(req, res, next)
  {
    Contest.find(function(err, contests)
    {
      if(err) return next(err);
      res.json(contests);
    });
  });
  module.exports = router;
})();
