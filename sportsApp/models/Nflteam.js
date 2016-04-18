var mongoose = require("mongoose");

var NflTeamSchema = new mongoose.Schema({
  abbr: String,
  team: String,
  mascot: String,
  logo: String
});
module.exports = mongoose.model('Nflteam', NflTeamSchema);
