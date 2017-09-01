'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/timings', {
        template: '<timings></timings>',
          authenticate: '/user'
      });
  });
