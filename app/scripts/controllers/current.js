'use strict';

/**
 * @ngdoc function
 * @name wats2000FinalApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the wats2000FinalApp
 */
angular.module('wats2000FinalApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {

  	$scope.gameID = $routeParams.gameID;
  	$scope.currentGame = current.query({
        gameID: $routeParams.gameID
    });


    $scope.saveCity = function(game){
    var cityData = {
        'title': game.title
        // 'id': game.thumb
    };
    if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
    } else {
        // Check to make sure we haven't already saved the game.
        var save = true;
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].title === cityData.title) {
                // this is a duplicate, so don't save
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedCities.push(cityData);
            // Add object to trigger messages
            $scope.citySaved = {
                'success': true
            };
        } else {
            console.log('game already saved');
            // Add object to trigger messages
            $scope.citySaved = {
                'duplicate': true
            };
        }
    }
}
});
