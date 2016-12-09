'use strict';

angular.module('myApp.SpiceExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SpiceExample', {
    templateUrl: 'SpiceExample/SpiceExample.html',
    controller: 'spiceController'
  });
}])
.controller('spiceController',['$scope',function ($scope){
	$scope.spiceName = 'NOT';

	$scope.spice =function(type){
		$scope.spiceName = type;
	}
}]);