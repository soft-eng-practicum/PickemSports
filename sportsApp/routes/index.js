(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();

  router.route("/")
    .get(function(request, response, next)
    {
      response.render("index",
      {
        title: "Express"
      });
    });

  module.exports = router;
})();
