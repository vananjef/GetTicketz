'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatres', {
        template: '<theatres></theatres>',
          authenticate: '/admin'
      });
  });
