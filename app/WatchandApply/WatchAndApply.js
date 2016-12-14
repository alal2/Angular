'use strict';

angular.module('myApp.WatchAndApply', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/WatchAndApply', {
    templateUrl: 'WatchAndApply/WatchAndApply.html',
    controller: 'watchController'
  });
}])
.controller('watchController',['$scope',function($scope){
	$scope.firstName = 'John';

	$scope.$watch('lastName',function(newVal, olVal){
		console.log('new Value is: ' + newVal);
	});

	setTimeout(function(){
		$scope.lastName = "Smith"
		$scope.$apply();
	},1000);
}]);