'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatre', {
        template: '<theatre></theatre>',
          authenticate: '/admin'
      });
  });
