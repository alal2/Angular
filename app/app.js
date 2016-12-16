'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.ngRepeat',
  'myApp.ngSubmit',
  'myApp.UsingServices',
  'myApp.SpiceExample',
  'myApp.First',
  'myApp.Directives',
  'myApp.JsonFetch',
  'myApp.FilterAndSort',
  'myApp.WatchAndApply',
  'myApp.RouteExample',
  'myApp.CustomDirective',
  'myApp.Form',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/ngRepeat'});
}]);
