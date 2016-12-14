'use strict';

angular.module('myApp.JsonFetch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/JsonFetch', {
    templateUrl: 'JsonFetch/JsonFetch.html',
    controller: 'jsonController'
  });
}])

.controller('jsonController',['$scope', '$http',function(scope, http){
	http.get('./JsonFetch/countries.json').success(function(data){
		scope.countries =data;
	});
}]);