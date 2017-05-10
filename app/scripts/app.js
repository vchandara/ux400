'use strict';

/**
 * @ngdoc overview
 * @name ux400App
 * @description
 * # ux400App
 *
 * Main module of the application.
 */
angular
  .module('ux400App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'HtmlCtrl'
      })
      .when('/css', {
        templateUrl: 'views/css.html',
        controller: 'CssCtrl',
        controllerAs: 'css'
      })
      .when('/js', {
        templateUrl: 'views/js.html',
        controller: 'JsCtrl',
        controllerAs: 'js'
      })
      .when('/jquery', {
        templateUrl: 'views/jquery.html',
        controller: 'JqueryCtrl',
        controllerAs: 'jquery'
      })
      .when('/openui', {
        templateUrl: 'views/openui.html',
        controller: 'OpenuiCtrl',
        controllerAs: 'openui'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
