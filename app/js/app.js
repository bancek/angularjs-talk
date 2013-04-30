'use strict';

angular.module('myApp', [
  'ngResource',

  'myApp.filters',
  'myApp.directives',
  'myApp.models',
  'myApp.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/comments', {
    templateUrl: 'partials/comments.html',
    controller: 'CommentsController'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}]);