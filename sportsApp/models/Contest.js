var mongoose = require("mongoose");

var ContestSchema = new mongoose.Schema(
  {
    id: Number,
    tags: String,
    matchups: [{
      matchupId: Number,
      homeTeam: String,
      homeLogo: String,
      homeRecord: String,
      homeInfo: String,
      awayTeam: String,
      awayLogo: String,
      awayRecord: String,
      awayInfo: String,
      selectedTeam: String,
      matchupWinner: String,
      gameInfo: String
    }],
    participants: {
      type: Number
    },
    usersWhoJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    picks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pick"
    }],
    isChecked: Boolean,
    end: String,
    start: String
  });

ContestSchema.methods.participate = function(user, callback) {
  if (this.usersWhoJoined.indexOf(user._id) == -1) {
    this.usersWhoJoined.push(user._id);
    this.participants++;

    this.save(callback);
  }
}

ContestSchema.methods.makeChecked = function(callback) {
  this.isChecked = true;
  this.save(callback);
}


mongoose.model("Contest", ContestSchema);
