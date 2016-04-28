"use strict";angular.module("wats2000FinalApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wats2000FinalApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats2000FinalApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats2000FinalApp").run(["$templateCache",function(a){a.put("views/about.html",'<center><h1>About this App</h1></center> <div id="brdAbout"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis magna ac rhoncus placerat. Fusce sit amet laoreet tortor, vitae viverra ante. Fusce feugiat fringilla enim quis ullamcorper. Proin mattis, nisl facilisis scelerisque fringilla, purus felis gravida sem, at finibus dui sapien eget ipsum. Morbi tempor urna nec quam hendrerit, sit amet auctor diam feugiat. Aliquam hendrerit, dui quis ullamcorper consectetur, ante erat gravida mi, sit amet laoreet mi quam pellentesque metus. Vivamus et magna vitae felis volutpat lobortis eleifend id purus. Morbi tincidunt velit id auctor semper. Aliquam erat volutpat. Pellentesque iaculis dictum ante luctus vestibulum. Vestibulum magna tortor, vestibulum sit amet arcu ac, elementum euismod ipsum.</p> <p>Morbi convallis vulputate massa sit amet consectetur. Aenean vel quam ac erat sodales vehicula quis et nisl. Suspendisse eros turpis, vehicula nec nisi finibus, rhoncus consequat enim. Ut in ante tempor, tristique lectus in, egestas sem. Nulla ullamcorper sodales risus a viverra. Praesent congue, nisl at porttitor scelerisque, enim justo ullamcorper ante, in finibus nisi elit vel magna. Vivamus rutrum nisl quis eleifend euismod.</p> <p>Nullam faucibus arcu vel nisi dapibus, nec elementum sapien congue. Morbi hendrerit ultrices nibh, ac vestibulum magna. Duis ac ligula commodo, viverra elit vel, consectetur nibh. Quisque auctor purus at est vehicula bibendum. Pellentesque tempor leo at tincidunt eleifend. Donec egestas efficitur enim, ut sollicitudin felis consequat vitae. Aenean quis finibus metus. Praesent consequat hendrerit tincidunt. Integer pulvinar dapibus nunc in laoreet. Nullam id lobortis magna. Vivamus vestibulum sapien et purus luctus, eu aliquam mauris consequat. Praesent bibendum lacus sit amet lectus mattis tristique. Quisque vel massa at magna maximus fringilla.</p> <p>Suspendisse sit amet fermentum leo. Quisque suscipit leo libero, ac eleifend mauris faucibus a. Nam tristique accumsan ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ac elit at ultrices. In hac habitasse platea dictumst. Nullam cursus arcu ante, et tristique lectus finibus a. Donec fringilla scelerisque pretium. Nunc erat orci, vestibulum sed tellus condimentum, vestibulum interdum nulla. Nam volutpat ligula at libero sagittis sollicitudin.</p> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse luctus mollis nulla, non sodales quam eleifend sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vel placerat nibh, et euismod odio. Nullam porttitor lacus non nunc accumsan interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sollicitudin, libero at maximus interdum, augue nibh maximus nibh, in blandit augue nunc vitae orci. Pellentesque tincidunt rutrum enim sed pellentesque. Nulla accumsan elit ut egestas elementum. Integer ac dignissim sapien. Donec ullamcorper tellus id diam luctus, ac ullamcorper eros bibendum. Suspendisse potenti. Praesent auctor, tortor in aliquet tempus, magna odio condimentum orci, egestas iaculis quam ligula nec est. Donec viverra tortor quis volutpat eleifend.</p></div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Hello World!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div> <div class="numCalc"> <h2>Enter a Calculation Into the Boxes Below!</h2> <div ng-app ng-init="myCol=\'#00CCFF\'" ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum" style="background-color:{{myCol}}" ng-model="myCol" value="{{myCol}}"> plus <input type="number" min="0" ng-model="secondnum" style="background-color:{{myCol}}" ng-model="myCol" value="{{myCol}}"> equals <span class="label label-success">{{firstnum + secondnum}}</span> </div> </div>')}]);