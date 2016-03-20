var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    matchups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matchup"
    },
    usersWhoJoined: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    contestId: Number
  });



mongoose.model("Contest", ContestSchema);
