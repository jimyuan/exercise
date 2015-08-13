'use strict';

angular.module('execApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partial/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.goUnder100 = function(){
    $location.path('/under100');
  };
}]);
