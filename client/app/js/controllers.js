'use strict';

angular.module('appControllers', [ 'appServices' ])
	.controller('UserListCtrl', function($scope, User) {
		$scope.users = User.query();
		
//		$scope.editUser = function(user){
//			if(user === 'new'){
//				$scope.isNew = true;
//				$scope.user = {firstname:'', lastname:'', email:'', age:''};
//			}else{
//				$scope.isNew = false;
//				$scope.user = user;
//			}
//		};
	})
	.controller('UserDetailCtrl', function($scope, User) {
		
	});
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