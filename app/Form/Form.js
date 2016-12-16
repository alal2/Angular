'use strict';

angular.module('myApp.Form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Form', {
    templateUrl: 'Form/Form.html',
    controller: 'formController'
  });
}])
.controller('formController',['$scope',function(scope){
    scope.funding = {startEstimate :0}

   scope.computeNeeded = function() {
        scope.funding.needed = scope.funding.startEstimate * 10;
    };

    scope.$watch('funding.startEstimate', scope.computeNeeded);
}])