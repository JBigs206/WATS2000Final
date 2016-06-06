'use strict';

/**
 * @ngdoc function
 * @name wats2000FinalApp.controller:PlayCtrl
 * @description
 * # PlayCtrl 
 * Controller of the wats2000FinalApp
 */
angular.module('wats2000FinalApp')
   .controller('PlayCtrl', function ($scope, play) { 
    $scope.play = play.query();
   

    $scope.refreshPlay = function(){
        $scope.play = play.query({
            game : $scope.game 
        });
    };
  });