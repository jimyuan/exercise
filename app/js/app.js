'use strict';

/* App Module */

angular.module('execApp', [
  'ngRoute',
  'ngAnimate',
  'execServices',
  'execApp.home',
  'execApp.under100'
])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .otherwise({redirectTo: '/home'});
}]);
