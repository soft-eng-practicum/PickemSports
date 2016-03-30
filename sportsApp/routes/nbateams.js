(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var Nbateam = mongoose.model("Nbateam");

  router.get('/', function(req, res, next)
  {
    Nbateam.find(function(err, nbateams)
    {
      if(err) return next(err);
      res.json(nbateams);
    });
  });
  
  module.exports = router;
})();
