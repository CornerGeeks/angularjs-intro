'use strict';

/* Filters */

var appFilters = angular.module('introFilters', []);
appFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

appFilters.filter('check1080p', function() {
  return function(resolution) {
  	var res_x_y;
  	var x = 0; var y = 0;
  	try{
  		res_x_y = resolution.split("x");
	  	x =parseInt(res_x_y[0]);
	  	y = parseInt(res_x_y[1]);
	  	if(y > x) {
	  		var t = x;
	  		x = y;
	  		y = t;
	  	}
	  	
  	}catch(err){
		
  	}
  	if(isNaN(x)) x = 0;
  	if(isNaN(y)) y = 0;
    return (y >= 1080 && x >= 1920) ? '\u2713' : '\u2718';

  };
});