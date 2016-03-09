var mongoose = require("mongoose");

var ContestSchema = new monggose.Schema(
  {
    startDate: Date,
    endDate: Date,
    matchups: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Matchup"
    }]
    usersWhoJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
  });

ContestSchema.methods.enter = function(user, callback)
{
  if(this.usersWhoJoined.indexOf(user._id) == -1)
  {
    this.usersWhoJoined.push(user._id);
    this.save(callback);
  }
  else
  {
    this.usersWhoJoined.splice(this.usersWhoJoined.indexOf(user._id), 1);
    this.save(callback);
  }
}

mongoose.model("Contest", ContestSchema);
