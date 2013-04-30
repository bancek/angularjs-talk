'use strict';

/* Filters */

angular.module('myApp.filters', [])

.filter('gravatar', function() {
  return function(email, size) {
    var hash;

    if (/@/.test(email)) { // spam prevention for test data
      hash = $().crypt({
        method: 'md5',
        source: email
      });
    } else {
      hash = email;
    }

    return "http://secure.gravatar.com/avatar/" + hash + ".jpg?s=" + size + "&d=identicon";
  };
})

.filter('cleanData', function() {
  return function(data){
    if (data == null || typeof data == 'string' || data.length != null) {
      return data;
    }

    var cleaned = {};

    for (var key in data) {
      if (key[0] != '$' && key != 'this') {
        cleaned[key] = data[key];
      }
    }

    return cleaned;
  }
})