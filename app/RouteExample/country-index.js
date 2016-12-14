'use strict';

angular.module('myApp.RouteExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/RouteExample', {
    templateUrl: 'RouteExample/country-list.html',
    controller: 'countryListController'
  })
  .when('/RouteExample/:countryId', {
    templateUrl: 'RouteExample/country-detail.html',
    controller: 'countryDetailController'
  })
  .otherwise ({
      redirectTo: '/RouteExample'
  })
}])
.factory('countries',['$http',function(http){
    //caching

    // var cachedData;

    // function getData(callback){
    //     if(cachedData){
    //         callback(cachedData);
    //     } else {
    //          http.get('./RouteExample/countryData.json').success(function(data){
    //              cachedData = data;
    //              callback(data);
    //          });
    //     }
    // }

    //caching using Angular module

    // function getData(callback){
    //     http({
    //         method: 'GET',
    //         url: './RouteExample/countryData.json',
    //         cache: true
    //     }).success(callback);
    // }
    return {
        list: function(callback){
            http({
                method: 'GET',
                url: './RouteExample/countries.json',
                cache: true
            }).success(callback);
            },
        find: function(id,callback){
         http({
                method: 'GET',
                url: './RouteExample/country_' + id +'.json',
                cache: true
            }).success(callback);
        }
    };
}])
.controller('countryListController',['$scope','countries',function(scope,countries){
    countries.list(function(data){
        scope.countries = data;
    });
}])
.controller('countryDetailController',['$scope','$routeParams','countries', function(scope,routeParams,countries){
    countries.find(routeParams.countryId, function(country){
        scope.chosenCountry = country;
    });
}])
.filter('encodeURI',function(){
    return window.encodeURI;
})



