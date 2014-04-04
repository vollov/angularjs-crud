'use strict';

angular.module('appControllers', [ 'ui.bootstrap','appServices' ])
	.controller('SettingCtrl',function ($scope, $location, Setting) {
		
		var setting = Setting.getSetting();
		//console.log('setting =%j',setting);
		if(setting === null) {
			Setting.query().then(function() {
				console.log('get data in controller: data');
				$scope.setting = Setting.getSetting();
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
	.controller('PostCodeCtrl',function($scope, $location, PostCode, Setting){
		
		var setting = Setting.getSetting();
		//console.log('setting =%j',setting);
		if(setting === null) {
			Setting.query().then(function() {
				console.log('get data in controller: data');
				$scope.setting = Setting.getSetting();
			});
		} else {
			$scope.setting = setting;
		}

		PostCode.query(1, function(data, status, headers, config) {
			$scope.postcodeSegment = data;
			$scope.currentSegment = 1;
			
			$scope.postCodesInPage = PostCode.getPage(1, $scope.postcodeSegment, $scope.setting.recordsPerPage);
			//postcodes, segment, pageSize, pagePerSegment){
			$scope.pageList = PostCode.getPageList($scope.postcodeSegment.length,1, $scope.setting.recordsPerPage, $scope.setting.pagesPerSegment);
//			$scope.pages = 
		});
		
		$scope.getPage = function(page_id){
			//console.log('getPage =' + typeof pageNumber);
			$scope.postCodesInPage = PostCode.getPage(page_id, $scope.postcodeSegment, $scope.setting.recordsPerPage);
		};
		
		$scope.getSegment = function(segment){
			PostCode.query(segment, function(data, status, headers, config) {
				$scope.postcodeSegment = data;
				$scope.currentSegment = segment;

			});
		};
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