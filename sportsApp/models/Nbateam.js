var mongoose = require("mongoose");

var NbaTeamSchema = new mongoose.Schema({
  abbr: String,
  team: String,
  mascot: String,
  teamScore: Number,
  logo: String
});
module.exports = mongoose.model('Nbateam', NbaTeamSchema);
