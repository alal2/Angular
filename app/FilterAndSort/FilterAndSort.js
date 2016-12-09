'use strict';

angular.module('myApp.FilterAndSort', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/FilterAndSort', {
    templateUrl: 'FilterAndSort/FilterAndSort.html',
    controller: 'jsonController'
  });
}])

.controller('jsonController',['$scope',function(scope){
			scope.countries = [{
					"name":"India",
					"population" :1056856565
				}
				,
				{
					"name":"China",
					"population" :1116856565
				},
				{
					"name":"USA",
					"population" :96856565
				},
				{
					"name":"Chili",
					"population" :111685
				}];
			scope.sortField = 'population'
			scope.reverse = true;
  	 }])