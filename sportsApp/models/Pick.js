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
  }
});
module.exports = mongoose.model('Pick', PickSchema);
