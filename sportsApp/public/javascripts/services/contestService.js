(function() {
  "use strict";

  var app = angular.module("sportsApp.services.contest", []);

  app.factory("contestService", ["$http", "$resource",
  function($http, $resource)
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
      return $resource('/contests/:id');
    }

    o.getAll = getAll;
    o.get = get;

    return o;
  }]);
})();
