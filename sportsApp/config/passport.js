var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = mongoose.model("User");

passport.use(new LocalStrategy(function(username, password, done)
{
  User.findOne(
    {
      username: username
    },
    function(err, user)
    {
      if(err)
      {
        return done(err);
      }
      if (!user)
      {
        return done(null, false,
        {
          message: "Incorrest username."
        });
      }
      if(!user.validPassword(password))
      {
        return done(null, false,
        {
          message: "Incorect password."
        });
      }
      return done(null, user);
    });
  }));
