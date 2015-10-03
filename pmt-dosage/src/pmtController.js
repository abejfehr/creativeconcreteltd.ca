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
    $scope.litres = null;
    $scope.types = [
      {
        name: "Low",
        value: 4/1000
      },
      {
        name: "Medium",
        value: 6/1000
      },
      {
        name: "High",
        value: 8/1000
      }
    ];
    $scope.selectedType = angular.toJson($scope.types[0]);
    $scope.cost = null;

    $scope.calculate = function() {
      $scope.litres = Math.round($scope.loadSize * $scope.binder * angular.fromJson($scope.selectedType).value * 100)/100;
      $scope.cost = Math.round(($scope.litres * $scope.pmt * 100))/100;
    };

    $scope.calculate();

  }

})();
