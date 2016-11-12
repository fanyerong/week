'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('wyc', function ($scope,$http) {
  	$http({
  		url:'http://www.somenote.cn:1602/list1',
  		method:'GET'
  	}).success(function(e){
  		console.log(e)
  		$scope.data=e
  		
  	})
    
  });
