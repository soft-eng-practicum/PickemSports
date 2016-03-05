(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();

  router.route("/partials/:name")
    .get(function(request, response, next)
    {
      response.render("partials/" + request.params.name,
      {
        title: Express
      });
    });

  module.exports = router;
})();
