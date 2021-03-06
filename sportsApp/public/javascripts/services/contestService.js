(function() {
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http", "authService", "$q",
  function($http, authService, $q)
  {
    var o = {
      contests: []
    };

    function getAll() {
      return $http.get("/contests").then(function(res) {
        angular.copy(res.data, o.contests);
      });
    }

    function get(id) {
        return $http.get("/contests/" + id).then(function(res) {
          return res.data;
        });
    }

    function participate(contest) {
      return $http.put("/contests/" + contest._id + "/participate", null, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      }).success(function(participatedContest) {
        angular.copy(participatedContest, contest);
      });
    }

    function createEntry(id, pick) {
      return $http.post("/contests/" + id + "/picks", pick, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
          }
      });
    }

    function setPoints(contest, pick) {
      return $http.put("/contests/" + contest._id + "/picks/" + pick._id + "/contestPoints", null, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      }).success(function(updatedPick) {
        angular.copy(updatedPick, pick);
      });
    }

    function deletePicks(id, pick) {
      return $http.delete("/contests/" + id + "/picks/" + pick._id, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      });
    }

    function makeChecked(contest) {
      return $http.put("/contests/" + contest._id + "/makeChecked", null, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      }).success(function(checkedContest) {
        angular.copy(checkedContest, contest);
      });
    }

    function getWinners(id) {
      return $http.get("/contests/contestWinners.json");
    }


    o.getAll = getAll;
    o.get = get;
    o.participate = participate;
    o.createEntry = createEntry;
    o.setPoints = setPoints;
    o.deletePicks = deletePicks;
    o.makeChecked = makeChecked;
    o.getWinners = getWinners;

    return o;
  }]);
})();
