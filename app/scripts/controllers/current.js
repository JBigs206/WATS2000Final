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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
