var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    id: Number,
    tags: String,
    matchups: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matchup"
    }],
    usersWhoJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
  });



mongoose.model("Contest", ContestSchema);
