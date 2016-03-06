(function()
{
  "use strict";

  var express = require("express");
  var router = express.Router();
  var mongoose = require("mongoose");
  var User = mongoose.model("User");
  var passport = require("passport");

  router.route("/register")
    .post(function(request, response, next)
    {
      if(!request.body.username || !request.body.password)
      {
        return response.status(400).json(
          {
            message: "Please fill out all fields."
          });
      }

      var user = new User();

      user.username = request.body.username;
      user.setPassword(request.body.password);

      user.save(function(err)
      {
        if(err)
        {
          return next(err);
        }
        return response.json(
          {
            token: user.generateJWT()
          });
      })
    });

    router.route("/login")
      .post(function(request, response, next)
      {
        if(!request.body.username || !request.body.password)
        {
          return response.status(400).json(
            {
              message: "Please fill out all fields."
            });
        }

        passport.authenticate("local", function(err, user, info)
        {
          if(err)
          {
            return next(err);
          }
          if(user)
          {
            return response.json(
              {
                token: user.generateJWT()
              });
          }
          else
          {
            return response.status(401).json(info);
          }
        })(request, response, next);
      });

      module.exports = router;
})();
