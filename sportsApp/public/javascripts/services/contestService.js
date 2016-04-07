(function() {
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http", "authService",
  function($http, authService)
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

    function participate(id) {
      return $http.put("/contests/" + id + "/participate", null, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      }).success(function(participatedContest) {
        angular.copy(participatedContest, contest);
      });
    }

    function create(id, pick) {
      return $http.put("/contests/" + id + "/picks", pick, {
        headers: {
          Authorization: "Bearer " + authService.getToken()
        }
      });
    }


    o.getAll = getAll;
    o.get = get;
    o.participate = participate;

    return o;
  }]);
})();
