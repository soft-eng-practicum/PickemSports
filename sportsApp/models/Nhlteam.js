var mongoose = require("mongoose");

var NhlTeamSchema = new mongoose.Schema({
  abbr: String,
  team: String,
  mascot: String,
  logo: String
});
module.exports = mongoose.model('Nhlteam', NhlTeamSchema);
