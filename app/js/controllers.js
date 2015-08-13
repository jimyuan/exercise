'use strict';

/* Controllers */

var execControllers = angular.module('execControllers', []);

execControllers.controller('HomeController', [
  '$rootScope', '$scope', 'store', 
  function($rootScope, $scope, store){

    $rootScope.title = 'Home Page';

    store.set();
}]);
