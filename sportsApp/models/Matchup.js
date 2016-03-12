var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    homeTeam: String,
    awayTeam: String,
    id: Number,
    value: String
  });

  mongoose.model("Matchup", MatchupSchema);
