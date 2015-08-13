'use strict';

angular.module('execApp.under100', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/under100', {
    templateUrl: 'partial/under100.html',
    controller: 'under100Ctrl'
  });
}])

.controller('under100Ctrl', ['$scope', 'under100', function($scope, under100) {
  // $scope.equation = under100.exercise().equation;
  var execNum = 20, data, exec;
  $scope.datas = [];
  $scope.execs = [];
  for(var i = 0; i < execNum; i++) {
    data = under100.tripleNum();
    exec = under100.exercise(data).equation;

    $scope.datas.push(data);
    $scope.execs.push(exec);
  }
  
  $scope.obtain = function(index) {
    $scope.datas.splice(index, 1, under100.tripleNum());
    $scope.execs.splice(index, 1, under100.exercise($scope.datas[index]).equation);
  };
  console.log($scope.datas)

}]);
