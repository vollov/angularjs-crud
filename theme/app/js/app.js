'use strict';

angular.module('appModule', [ 'ngRoute', 'appControllers' ])
	.config(function($routeProvider) {
		$routeProvider.when('/login', {
			controller : 'LoginCtrl',
			templateUrl : '/views/public/login.html'
		}).when('/home', {
			templateUrl : '/views/public/home.html'
		}).when('/users', {
			controller : 'UserListCtrl',
			templateUrl : '/views/user/list.html'
		}).otherwise({
			redirectTo : '/login'
		});
	});