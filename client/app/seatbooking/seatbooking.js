'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seatbooking', {
        template: '<seatbooking></seatbooking>',
          authenticate: '/user'
      });
  });
