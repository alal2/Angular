'use strict';

angular.module('myApp.ngRepeat', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ngRepeat', {
    templateUrl: 'ngRepeat/ngRepeat.html',
    controller: 'repeatController'
  });
}])

.controller('repeatController',['$scope',function($scope){
			$scope.names =['Larry', 'Joe', 'Amy'];
}]);