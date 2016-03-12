var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    homeTeam: String,
    awayTeam: String,
    id: Number
  });

  mongoose.model("Matchup", MatchupSchema);
