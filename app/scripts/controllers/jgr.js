'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('jgr', function ($scope,$http) {
  	$http({
  		url:'http://www.somenote.cn:1602/list2',
  		method:'GET'
  	}).success(function(e){
  		console.log(e)
  		$scope.data=e
  		
  	})
    
  });
