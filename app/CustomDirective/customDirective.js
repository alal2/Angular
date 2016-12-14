'use strict';

angular.module('myApp.CustomDirective', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/CustomDirective', {
    templateUrl: 'CustomDirective/games-list.html',
    controller: 'gameListController'
  })
  .when('/CustomDirective/:gameId', {
    templateUrl: 'CustomDirective/games-detail.html',
    controller: 'gameDetailController'
  })
  .otherwise ({
      redirectTo: '/CustomDirective'
  })
}])
.factory('gamesFac',['$http',function(http){
    return {
        list: function(callback){
            http({
                method: 'GET',
                url: './CustomDirective/games.json',
                cache: true
            }).success(callback);
            },
        find: function(id,callback){
         http({
                method: 'GET',
                url: './CustomDirective/game' + id +'.json',
                cache: true
            }).success(callback);
        }
    };
}])
.directive('gamesDir',function(){
    return {
        scope: {
            game: '='
        },
        restrict:'A',
        templateUrl:'./CustomDirective/games.html',
        controller: function($scope, gamesFac){
            gamesFac.find($scope.game.id, function(game){
                $scope.players = game.players;
            });
        }
    }
})
.controller('gameListController',['$scope','gamesFac',function(scope,gamesFac){
    gamesFac.list(function(data){
        scope.games = data;
    });
}])
.controller('gameDetailController',['$scope','$routeParams','gamesFac', function(scope,routeParams,gamesFac){
    gamesFac.find(routeParams.gameId, function(game){
        scope.chosenGame = game;
    });
}])
.filter('encodeURI',function(){
    return window.encodeURI;
})



