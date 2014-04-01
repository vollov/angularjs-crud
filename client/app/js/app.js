'use strict';

angular.module('appModule', [ 'ngRoute', 'ngResource',  'appControllers' ])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl : '/views/home.html'
		}).when('/users', {
			controller : 'UserListCtrl',
			templateUrl : '/views/user/list.html'
		}).when('/user/new', {
			controller : 'UserDetailCtrl',
			templateUrl : '/views/user/detail.html'
		}).when('/user/:id', {
			controller : 'UserDetailCtrl',
			templateUrl : '/views/user/detail.html'
		}).otherwise({
			redirectTo : '/home'
		});
		//$locationProvider.html5Mode(true);
	});
