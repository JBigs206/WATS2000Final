'use strict';

/**
 * @ngdoc service
 * @name wats2000FinalApp.current
 * @description
 * # current
 * Factory in the wats2000FinalApp.
 */
 angular.module('wats2000FinalApp')
 .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here

    return $resource('https://videogamesrating.p.mashape.com/get.php?count=:count&game=:gameID', {}, {
      query: {
        method:'GET',

        params:{
          count : '5', 


        },

        headers : { 'X-Mashape-Key' : 'uGVChipeKjmshBJQevoro6tDrmX2p14ZX1njsnQ7NbTMwk538t'
      },

      isArray: true

    },



  }); 
    wats2000FinalApp.$inject = ['$resource', 'mashapeKey'];

  }); 