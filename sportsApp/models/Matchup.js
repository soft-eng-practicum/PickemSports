var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    nbaTeams: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nbaTeams"
    },
    matchupId: Number,
    pick: String
  });

  mongoose.model("Matchup", MatchupSchema);
