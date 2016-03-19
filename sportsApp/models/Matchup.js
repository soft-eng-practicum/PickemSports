var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    nbaTeams: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nbaTeams"
    },
    selectedTeam: String,
    matchupWinner: String,
    startDate: String
  });

  mongoose.model("Matchup", MatchupSchema);
