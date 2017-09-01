'use strict';

angular.module('yotemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirmation', {
        template: '<confirmation></confirmation>'
      });
  });
