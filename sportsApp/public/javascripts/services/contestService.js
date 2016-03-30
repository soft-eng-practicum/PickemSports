(function()
{
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http",
  function($http)
  {
    var o = {
      contests: []
    };

    function getAll() {
      return $http.get("/contests").then(function(res) {
        angular.copy(res.data, o.contests);
      });
    }

    function get(_id) {
      return $http.get("/contests/" + _id).then(function(res) {
        return res.data;
      });
    }

    o.getAll = getAll;
    o.get = get;

    return o;
  }]);
})();
