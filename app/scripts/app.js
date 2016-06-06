'use strict';

/**
 * @ngdoc overview
 * @name wats2000FinalApp
 * @description
 * # wats2000FinalApp
 *
 * Main module of the application.
 */
angular
  .module('wats2000FinalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current/:gameID', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      //added new test controler 05/24/16
      .when('/xbox', {
        templateUrl: 'views/xbox.html',
        controller: 'XboxCtrl',
        controllerAs: 'xbox'
      })
      .when('/playstation', {
        templateUrl: 'views/playstation.html',
        controller: 'PlayCtrl',
        controllerAs: 'play'
      })
       .when('/wii', {
        templateUrl: 'views/wii.html',
        controller: 'NintendoCtrl',
        controllerAs: 'wii'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
