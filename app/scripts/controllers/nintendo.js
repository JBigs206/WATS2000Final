'use strict';

/**
 * @ngdoc function
 * @name wats2000FinalApp.controller:NintendoCtrl
 * @description
 * # NintendoCtrl 
 * Controller of the wats2000FinalApp
 */
angular.module('wats2000FinalApp')
   .controller('NintendoCtrl', function ($scope, wii) { 
    $scope.wii = wii.query();
    
    $scope.refreshWii = function(){
        $scope.wii = wii.query({
            game : $scope.game 
        });
    };
  });