(function(){
  'use strict';
  angular.module('execResources', []).factory('C', [
    '$rootScope','$resource', function(
     $rootScope,  $resource){

    var normalPrarms = {}, url='/json';

    return $resource(url, normalPrarms, {
      
    });
  }]);
})();
