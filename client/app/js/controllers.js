'use strict';

angular.module('appControllers', [ 'ui.bootstrap','appServices' ])
	.controller('SettingCtrl',function ($scope, $location, Setting) {
		
		var setting = Setting.get();
		//console.log('setting =%j',setting);
		if(setting === null) {
			Setting.async().then(function() {
				console.log('get data in controller: data');
				$scope.setting = Setting.get();
			});
		} else {
			$scope.setting = setting;
		}
		
		$scope.postcode = function() {
			$location.path('/postcodes');
		};
		$scope.save = function(setting) {
			console.log('called sigup()......');
			Setting.save(setting);
		}
	})
	.controller('PostCodeCtrl',function($scope, $location, Setting, PostCode){
		$scope.setting = Setting.get();
		var postcodes = PostCode.getPostCodes();
		var total = PostCode.getTotal();
		
		var currentPage = 1;
		
		// if postcodes is null, load it
		if(postcodes === null){
			PostCode.async().then(function() {
				$scope.postcodes = PostCode.getPostCodes();
			});
		}else{
			$scope.postcodes = PostCode.getPostCodes();
		}
		
		// if total is null, load it
		if(total === null){
			PostCode.total().then(function() {
				$scope.total = PostCode.getTotal();
			});
		}else{
			$scope.total = PostCode.getTotal();
		}
		
		// get default current page
		
		
		console.log('in PostCodeCtrl......');
		$scope.totalItems = 64;
		
		$scope.currentPage = 1;
		$scope.maxSize = 5;
		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};

		$scope.bigTotalItems = 175;
		$scope.bigCurrentPage = 1;
	});
//	.controller('UserListCtrl', function($scope, User) {
//		$scope.users = User.query();
//		
//		$scope.editUser = function(user){
//			if(user === 'new'){
//				$scope.isNew = true;
//				$scope.user = {firstname:'', lastname:'', email:'', age:''};
//			}else{
//				$scope.isNew = false;
//				$scope.user = user;
//			}
//		};
//	})
//	.controller('UserDetailCtrl', function($scope, User) {
//		
//	});
//	.controller('ContactController', function ($scope, ContactService) {
//		$scope.contacts = ContactService.list();
//		
//		$scope.saveContact = function () {
//			ContactService.save($scope.newcontact);
//			$scope.newcontact = {};
//		};
//		
//		$scope.delete = function (id) {
//			ContactService.delete(id);
//			if ($scope.newcontact.id == id) $scope.newcontact = {};
//		};
//		
//		$scope.edit = function (id) {
//			console.log('edit i=' + typeof(id));
//			$scope.newcontact = angular.copy(ContactService.get(id));
//		}
//	});