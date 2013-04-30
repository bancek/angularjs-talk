'use strict';

/* Directives */

angular.module('myApp.directives', [])

.directive('debug', function() {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      title: '@',
    },
    templateUrl: 'partials/debug.html',
    controller: function($scope, $element) {

    }
  };
})

.directive('hasFocus', function($timeout) {
  return function(scope, elm, attrs) {
    scope.$watch(attrs.hasFocus, function(value) {
      if (value) {
        $timeout(function(){
          elm.focus();
        }, 0);
      }
    });
  };
})
