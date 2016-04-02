var mongoose = require("mongoose");

var MatchupSchema = new mongoose.Schema(
  {
    selectedTeam: String,
    matchupId: Number,
    matchupWinner: String,
    contest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contest"
    },
    nbaTeams: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "nbaTeams"
    }],
  });

  mongoose.model("Matchup", MatchupSchema);
