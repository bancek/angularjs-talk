'use strict';

/* Models */
angular.module('myApp.models', [])

.factory('Comment', function($resource) {
  return $resource('/app/api/comments.json');
})