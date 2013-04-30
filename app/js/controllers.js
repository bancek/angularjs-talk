'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeController', function($scope) {
  
})

.controller('CommentsController', function($scope, Comment) {
  $scope.loaded = false;

  Comment.query(function(res) {
    res.reverse();
    $scope.comments = res;
    $scope.loaded = true;
  });

  $scope.post = function(){
    $scope.comments.unshift({
      name: $scope.user.name,
      email: $scope.user.email,
      content: $scope.comment
    });

    $scope.comment = '';
  }
})
