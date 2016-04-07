var mongoose = require("mongoose");

var PickSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User"
  },
  contest: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Contest"
  },
  selectedTeams: String
});
module.exports = mongoose.model('Pick', PickSchema);
