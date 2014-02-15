'use strict';

/* App Module */
var angularAppJS = angular.module('angularApp', [
  'ngRoute',
  'introControllers',
  'introFilters',
  'introServices',
  'introDirectives'
]);

angularAppJS.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);