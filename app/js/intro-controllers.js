'use strict';

/* Controllers */


// creates a module in angular
// modules are loaded in app.js
var appControllers = angular.module('introControllers', []);


function introBindingCtrlByFunction($scope){
  $scope.query = "Default query";
  $scope.lengthOfInput = function(){
    return $scope.query.length;
  }
}

appControllers.controller('introBindingCtrl', function($scope){
  $scope.query = "Nexus";
  $scope.devices = [
    {'name': 'Nexus 5', 'os': 'Android', 'type': 'Phone', 'resolution': '1920x1080', 'screen_size': '4.95'}
    ,{'name': 'Nexus 4', 'os': 'Android', 'type': 'Phone', 'resolution': '1280x768', 'screen_size': '4.7'}
    ,{'name': 'Nexus 10', 'os': 'Android', 'type': 'Tablet', 'resolution': '2560x1600', 'screen_size': '10'}
    ,{'name': 'Nexus 7', 'os': 'Android', 'type': 'Tablet', 'resolution': '1920x1200', 'screen_size': '7'}
    ,{'name': 'iPhone 5', 'os': 'iOS', 'type': 'Phone', 'resolution': '1136x640', 'screen_size': '4'}
    ,{'name': 'iPhone 4S', 'os': 'iOS', 'type': 'Phone', 'resolution': '960x640', 'screen_size': '3.5'}
    ,{'name': 'iPad', 'os': 'iOS', 'type': 'Tablet', 'resolution': '2048x1536', 'screen_size': '9.7'}
    ,{'name': 'iPad Mini', 'os': 'iOS', 'type': 'Tablet', 'resolution': '2048x1536', 'screen_size': '7.9'}
  ];
  $scope.lengthOfInput = function(){
    return $scope.query.length+2;
  }
});


// from angular tutorial
appControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}]);

appControllers.controller('PhoneListCtrlNotUsingService', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
  }
]);
 

appControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });
 
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);
