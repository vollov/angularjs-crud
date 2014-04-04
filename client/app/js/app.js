'use strict';

'use strict';

angular.module('appModule', [ 'ngRoute', 'appControllers' ])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			controller : 'SettingCtrl',
			templateUrl : '/views/public/setting.html'
		}).when('/postcodes', {
			controller : 'PostCodeCtrl',
			templateUrl : '/views/postcode/list.html'
		}).when('/postcode/:id', {
			controller : 'PostCodeEditCtrl',
			templateUrl : '/views/postcode/detail.html'
		}).otherwise({
			redirectTo : '/home'
		});
	});
