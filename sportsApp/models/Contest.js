var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    matchups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matchup"
    }
  });

mongoose.model("Contest", ContestSchema);
