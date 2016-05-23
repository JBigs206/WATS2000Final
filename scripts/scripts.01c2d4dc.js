"use strict";angular.module("wats2000FinalApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).otherwise({redirectTo:"/"})}]),angular.module("wats2000FinalApp").controller("MainCtrl",["$scope","current","$localStorage",function(a,b,c){a.current=b.query(),a.storage=c,a.refreshCurrent=function(){a.current=b.query({game:a.game})}}]),angular.module("wats2000FinalApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats2000FinalApp").factory("current",["$resource",function(a){return a("https://videogamesrating.p.mashape.com/get.php?count=:count&game=:game",{},{query:{method:"GET",params:{count:"5",game:"God+of+War"},headers:{"X-Mashape-Key":"uGVChipeKjmshBJQevoro6tDrmX2p14ZX1njsnQ7NbTMwk538t"},isArray:!0}})}]),angular.module("wats2000FinalApp").factory("citysearch",["$resource",function(a){return a("https://videogamesrating.p.mashape.com/get.php/find?count=:count&query=:query&type=like&mode=json&",{},{find:{method:"GET",params:{count:"5",query:"God+of+War"},headers:{"X-Mashape-Key":"uGVChipeKjmshBJQevoro6tDrmX2p14ZX1njsnQ7NbTMwk538t"},isArray:!0}})}]),angular.module("wats2000FinalApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.saveCity=function(b){var c={name:game.title,id:game.thumb};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id===c.id&&(e=!1);e===!0?(d.savedCities.push(c),a.citySaved={success:!0}):(console.log("city already saved"),a.citySaved={duplicate:!0})}else d.savedCities=[c]}}]),angular.module("wats2000FinalApp").run(["$templateCache",function(a){a.put("views/about.html",'<center><h1>About this App</h1></center> <div id="brdAbout"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis magna ac rhoncus placerat. Fusce sit amet laoreet tortor, vitae viverra ante. Fusce feugiat fringilla enim quis ullamcorper. Proin mattis, nisl facilisis scelerisque fringilla, purus felis gravida sem, at finibus dui sapien eget ipsum. Morbi tempor urna nec quam hendrerit, sit amet auctor diam feugiat. Aliquam hendrerit, dui quis ullamcorper consectetur, ante erat gravida mi, sit amet laoreet mi quam pellentesque metus. Vivamus et magna vitae felis volutpat lobortis eleifend id purus. Morbi tincidunt velit id auctor semper. Aliquam erat volutpat. Pellentesque iaculis dictum ante luctus vestibulum. Vestibulum magna tortor, vestibulum sit amet arcu ac, elementum euismod ipsum.</p> <p>Morbi convallis vulputate massa sit amet consectetur. Aenean vel quam ac erat sodales vehicula quis et nisl. Suspendisse eros turpis, vehicula nec nisi finibus, rhoncus consequat enim. Ut in ante tempor, tristique lectus in, egestas sem. Nulla ullamcorper sodales risus a viverra. Praesent congue, nisl at porttitor scelerisque, enim justo ullamcorper ante, in finibus nisi elit vel magna. Vivamus rutrum nisl quis eleifend euismod.</p> <p>Nullam faucibus arcu vel nisi dapibus, nec elementum sapien congue. Morbi hendrerit ultrices nibh, ac vestibulum magna. Duis ac ligula commodo, viverra elit vel, consectetur nibh. Quisque auctor purus at est vehicula bibendum. Pellentesque tempor leo at tincidunt eleifend. Donec egestas efficitur enim, ut sollicitudin felis consequat vitae. Aenean quis finibus metus. Praesent consequat hendrerit tincidunt. Integer pulvinar dapibus nunc in laoreet. Nullam id lobortis magna. Vivamus vestibulum sapien et purus luctus, eu aliquam mauris consequat. Praesent bibendum lacus sit amet lectus mattis tristique. Quisque vel massa at magna maximus fringilla.</p> <p>Suspendisse sit amet fermentum leo. Quisque suscipit leo libero, ac eleifend mauris faucibus a. Nam tristique accumsan ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ac elit at ultrices. In hac habitasse platea dictumst. Nullam cursus arcu ante, et tristique lectus finibus a. Donec fringilla scelerisque pretium. Nunc erat orci, vestibulum sed tellus condimentum, vestibulum interdum nulla. Nam volutpat ligula at libero sagittis sollicitudin.</p> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse luctus mollis nulla, non sodales quam eleifend sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vel placerat nibh, et euismod odio. Nullam porttitor lacus non nunc accumsan interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sollicitudin, libero at maximus interdum, augue nibh maximus nibh, in blandit augue nunc vitae orci. Pellentesque tincidunt rutrum enim sed pellentesque. Nulla accumsan elit ut egestas elementum. Integer ac dignissim sapien. Donec ullamcorper tellus id diam luctus, ac ullamcorper eros bibendum. Suspendisse potenti. Praesent auctor, tortor in aliquet tempus, magna odio condimentum orci, egestas iaculis quam ligula nec est. Donec viverra tortor quis volutpat eleifend.</p></div>'),a.put("views/current.html",'<p><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save Game</button></p> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{game.title}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{game.title}} has already been saved to your list of cities. </p> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Results for {{game.title}}</h1> <p class="lead"> <div ng-init="game =\'God of War\'"> <p> <label for="game ">Game: <input type="text" name="game " ng-model="game "> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Find Game</button> </p> <dl ng-repeat="(key, game) in current"> <dt>Title </dt> <dd>{{game.title}}</dd> <dd>{{game.publisher}}</dd> <dd>{{game.score}}</dd> <dt>Description</dt> <dd>{{game.short_description}}</dd> <dt>Platform</dt> <dd>{{game.platfomrs[0]}}</dd> <dd>{{game.platfomrs[1]}}</dd> <dd>{{game.thumb}}</dd> </dl> </div> </p> </div> <div ng-if="storage.savedCities"> <h2>Saved Games</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="/#/current/{{game.title}}" class="btn btn-lg btn-primary">{{game.title}}</a> </li> </ul> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div> <div class="numCalc"> <h2>Enter a Calculation Into the Boxes Below!</h2> <div ng-app ng-init="myCol=\'#00CCFF\'" ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum" style="background-color:{{myCol}}" ng-model="myCol" value="{{myCol}}"> plus <input type="number" min="0" ng-model="secondnum" style="background-color:{{myCol}}" ng-model="myCol" value="{{myCol}}"> equals <span class="label label-success">{{firstnum + secondnum}}</span> </div> </div>')}]);