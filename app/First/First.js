'use strict';

angular.module('myApp.First', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/First', {
    templateUrl: 'First/First.html'
  });
}])
