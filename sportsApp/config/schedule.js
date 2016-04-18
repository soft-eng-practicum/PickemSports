var mongoose = require("mongoose");
var express = require("express");
var Contest = mongoose.model("Contest");
var schedule = require('node-schedule');
var date = new Date(2016, 3, 18, 16, 54, 0);

module.exports = function(Schedule) {
  var Schedule = schedule.scheduleJob(date, function(){
    console.log('The world is going to end today.');

    Contest.update({"_id": "5713fd7b9c9828c6dc3f7189", "matchups.matchupId": 1}, {"$set": {"matchups.$.matchupWinner": "IT WORKS BABBBAY!!"}});

  });
};
