'use strict';

angular.module('myApp.Directives', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Directives', {
    templateUrl: 'Directives/Directives.html',
    controller: 'directiveController'
  });
}])

.controller('directiveController',['$scope',function($scope){
  	 	$scope.customer = {
  	 		name:'Ankita',
  	 		address: 'Sapient'
  	 	};
  	 }])
 .directive('myCustomer',function() {
 	return {
 		template : 'Name :{{ customer.name}}, Address :{{customer.address}}'
 	};
 });