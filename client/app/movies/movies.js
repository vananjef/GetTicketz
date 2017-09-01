'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movies', {
        template: '<movies></movies>',
          authenticate: '/admin'
      });
  });
