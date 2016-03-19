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

  ContestSchema.methods.usersWhoJoined = function(user, callback) {
    if(this.usersWhoJoined =.indexOf(user._id) == -1) {
      this.usersWhoJoined.push(user._id);

      if(this.usersWhoJoined.indexOf(user._id) != -1) {
        this.usersWhoJoined.splice(this.usersWhoJoined.indexOf(user._id), 1);
      }
      this.save(callback);
  }

mongoose.model("Contest", ContestSchema);
