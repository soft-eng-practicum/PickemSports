var mongoose = require("mongoose");

var NbaTeamSchema = new mongoose.Schema({
  abbr: String,
  team: String,
  mascot: String,
  logo: String
});
module.exports = mongoose.model('Nbateam', NbaTeamSchema);
