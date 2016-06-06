'use strict';

/**
 * @ngdoc function
 * @name wats2000FinalApp.controller:MainCtrl
 * @description
 * # MainCtrl 
 * Controller of the wats2000FinalApp
 */
angular.module('wats2000FinalApp')
   .controller('XboxCtrl', function ($scope, xbox) { 
    $scope.xbox = xbox.query();

    $scope.refreshXbox = function(){
        $scope.xbox = xbox.query({
            game : $scope.game 
        });
    };
  });