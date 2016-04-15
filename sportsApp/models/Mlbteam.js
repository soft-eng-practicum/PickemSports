var mongoose = require("mongoose");

var MlbTeamSchema = new mongoose.Schema({
  abbr: String,
  team: String,
  mascot: String,
  logo: String
});
module.exports = mongoose.model('Mlbteam', MlbTeamSchema);
