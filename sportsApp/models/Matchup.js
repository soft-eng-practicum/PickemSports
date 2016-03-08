var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    homeTeam: String,
    awayTeam: String,
    pickHome: boolean,
    pickAway: boolean,
  });

  MatchupSchema.methods.pickHome = function(callback)
  {
    this.pickHome = true;
    this.save(callback);
  }

  MatchupSchema.methods.pickAway = function(callback)
  {
    this.pickAway = true;
    this.save(callback);
  }

  mongoose.model("Matchup", MatchupSchema);
