'use strict';

/**
 * @ngdoc function
 * @name wats2000FinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats2000FinalApp
 */
angular.module('wats2000FinalApp')
   .controller('MainCtrl', function ($scope, current, $localStorage) {
    $scope.current = current.query();
    $scope.storage = $localStorage;

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            game : $scope.game 
        });
    };
  });