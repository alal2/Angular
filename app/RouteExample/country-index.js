'use strict';

angular.module('myApp.RouteExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/RouteExample', {
    templateUrl: 'RouteExample/country-list.html',
    controller: 'countryListController'
  })
  .when('/RouteExample/:countryName', {
    templateUrl: 'RouteExample/country-detail.html',
    controller: 'countryDetailController'
  })
  .otherwise ({
      redirectTo: '/RouteExample'
  })
}])
.factory('countries',['$http',function(http){
    return {
        list: function(callback){
            http.get('./RouteExample/countryData.json').success(callback);
        },
        find: function(name,callbaack){
            http.get('./RouteExample/countryData.json').success(function(data){
                var country = data.filter(function(entry){
                    return entry.name === name;
                })[0];
                callback(country);
            });
        }
    };
}])
.controller('countryListController',['$scope','countries',function(scope,countries){
    countries.list(function(data){
        scope.countries = data;
    });
}])
.controller('countryDetailController',['$scope','$routeParams','countries', function(scope,countries,routeParams){
    countries.find(routeParams.countryName,function(country){
        scope.chosenCountry = country;
    });
}]);



