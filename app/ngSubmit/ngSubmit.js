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
	$scope.remove =function($index) {
	//	var index = $scope.names.indexOf(name); when name is passed as parameter
		$scope.names.splice($index,1);
	}
}]);