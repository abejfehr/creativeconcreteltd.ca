(function(){

  angular
       .module('pmt')
       .controller('PMTController', [
          '$scope',
          PMTController
       ]);

  /**
   * Main Controller for PMT Angular app
   * @param $scope
   * @constructor
   */
  function PMTController($scope) {

    $scope.binder = 340;
    $scope.loadSize = 5;
    $scope.pmt = 25;
    $scope.types = [
      {
        name: "Low",
        value: 4/10
      },
      {
        name: "Medium",
        value: 6/10
      },
      {
        name: "High",
        value: 8/10
      }
    ];
    $scope.selectedType = angular.toJson($scope.types[0]);
    $scope.cost = null;

    $scope.calculate = function() {
      $scope.cost = "$" + Math.round(($scope.loadSize * $scope.binder * angular.fromJson($scope.selectedType).value * $scope.pmt))/100;
    };

    $scope.calculate();

  }

})();
