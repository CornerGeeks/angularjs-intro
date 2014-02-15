'use strict';

/* Services */

var appServices = angular.module('introServices', ['ngResource']);
 

// http://docs.angularjs.org/api/ng.$http
// http://docs.angularjs.org/api/ngResource.$resource
// http://stackoverflow.com/questions/13181406/angularjs-http-and-resource
//  $http is for general purpose AJAX. In most cases this is what you'll be using. With $http you're going to be making GET, POST, DELETE type calls manually and processing the objects they return on your own.
// 	$resource wraps $http for use in RESTful web API scenarios.


// from anugalr tutorial 
appServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);