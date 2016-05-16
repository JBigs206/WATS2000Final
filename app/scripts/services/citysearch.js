'use strict';

/**
 * @ngdoc service
 * @name wats2000FinalApp.citysearch
 * @description
 * # citysearch
 * Factory in the wats2000FinalApp.
 */
angular.module('wats2000FinalApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

   

    // Public API here
     return $resource('https://videogamesrating.p.mashape.com/get.php/find?count=:count&query=:query&type=like&mode=json&', {}, {
      find: {
        method:'GET',

         params:{
          count : '5', 
          query : 'God+of+War',
    //     //'acess_token=ACESS_TOKEN' 'https://videogamesrating.p.mashape.com/get.php',

        
         },
         
          headers : { 'X-Mashape-Key' : 'uGVChipeKjmshBJQevoro6tDrmX2p14ZX1njsnQ7NbTMwk538t'
                     
                      //'Accept' : 'application/json' 
                    },

       isArray: true

      }
        
                     
       
    }); 
     //wats2000FinalApp.$inject = ['$resource', 'mashapeKey'];

  });
