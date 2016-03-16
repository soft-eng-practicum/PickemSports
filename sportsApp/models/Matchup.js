var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    nbaTeams: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nbaTeams"
    },
    matchupId: Number,
    selectedTeam: String,
    matchupWinner: String
  });

  mongoose.model("Matchup", MatchupSchema);
