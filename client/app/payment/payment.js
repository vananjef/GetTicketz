'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/payment', {
        template: '<payment></payment>',
          authenticate: '/user'
      });
  });
