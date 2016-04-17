var mongoose = require("mongoose");

var PickSchema = new mongoose.Schema({
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest"
  },
  selectedTeams: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  contestPoints: Number
});

PickSchema.methods.incrementPoints = function(user, callback) {
  this.contestPoints++;
  user._id.totalPoints++;
  this.save(callback);
}
module.exports = mongoose.model('Pick', PickSchema);
