var mongoose = require("mongoose");
var db = mongoose.connection;
var collection = db.collection("contests");
var schedule = require('node-schedule');
var date = new Date(2016, 3, 16, 16, 58, 0);

var j = schedule.scheduleJob(date, function(){
  console.log('The world is going to end today.');
  collection.update({"_id": "570bfbb3a9d732c2652f932c", "matchups.matchupId": 1}, {"$set": {"matchups.$.matchupWinner": "IT WORKS BABBBAY!!"}});
  matchups.markModified("matchups");
  collection.save();

});
