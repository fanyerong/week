'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */

angular.module('yeomanApp',['ui.router']).config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('wyc',{
		url:'/wyc',
		templateUrl:'views/wyc.html',
		controller:'wyc'
		})
		.state('jgr',{
		url:'/jgr',
		templateUrl:'views/jgr.html',
		controller:'jgr'
		});
	$urlRouterProvider.when('','/wyc');
	});
  
    

