var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    id: Number,
    tags: String,
    matchups: [{
      matchupId: Number,
      homeTeam: String,
      homeLogo: String,
      awayTeam: String,
      awayLogo: String,
      selectedTeam: String,
      matchupWinner: String
    }],
    usersWhoJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
  });



mongoose.model("Contest", ContestSchema);
