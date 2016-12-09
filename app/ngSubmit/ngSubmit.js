'use strict';

angular.module('myApp.ngSubmit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ngSubmit', {
    templateUrl: 'ngSubmit/ngSubmit.html',
    controller: 'submitController'
  });
}])
.controller('submitController',['$scope',function($scope){
	$scope.names= ['larry','amy','joe'];

	if($scope.newEntry !== ''){
		$scope.addName = function(){
		$scope.names.push($scope.newEntry)
		$scope.newEntry = '';
	 }
	}
	$scope.remove =function(name) {
		var index = $scope.names.indexOf(name);
		$scope.names.splice(index,1);
	}
}]);