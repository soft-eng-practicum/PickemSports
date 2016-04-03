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
    participants: {
      type: Number,
      default: 0
    },
    usersWhoJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
  });

ContestSchema.methods.participate = function(user, callback) {
  if (this.usersWhoJoined.indexOf(user._id) == -1) {
    this.usersWhoJoined.push(user._id);
    this.participants++;

    this.save(callback);
  } else {
    this.usersWhoJoined.splice(this.usersWhoJoined.indexOf(user._id), 1);
    this.participants--;

    this.save(callback);
  }
}


mongoose.model("Contest", ContestSchema);
