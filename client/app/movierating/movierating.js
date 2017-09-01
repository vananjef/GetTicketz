'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movierating', {
        template: '<movierating></movierating>'
      });
  });
