'use strict';

angular.module('yotemplateApp.auth', ['yotemplateApp.constants', 'yotemplateApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
