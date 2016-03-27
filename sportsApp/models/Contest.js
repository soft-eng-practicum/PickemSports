var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    _id: Number,
    matchups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matchup"
    },
    usersWhoJoined: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  });



mongoose.model("Contest", ContestSchema);
