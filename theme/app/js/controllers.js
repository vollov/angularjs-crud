'use strict';

angular.module('appControllers', ['ui.bootstrap','appServices'])
	.controller('SettingCtrl',function ($scope, $location) {
//		myService.async().then(function(d) {
//		      $scope.data = d;
//		    });
		
		
		$scope.postcode = function() {
			$location.path('/postcodes');
		};
		$scope.save = function(setting) {
			console.log('called sigup()......');
			//$location.path('/home');
		}
	})
	.controller('PostCodeCtrl',function($scope, $location){
		
	});
//	.controller('UserListCtrl', function($scope, $location, User){
//		
//		$scope.users = User.query();
//		console.log('controller getting users=%j', $scope.users);
//		$scope.users = [ {
//			'_id':1001,
//			'email': 'mary@demo.org',
//			"firstname" : "Mary",
//			"lastname" : "Davis",
//			"age" : 12
//		}, {
//			'_id':1002,
//			'email': 'wendy@abc.com',
//			"firstname" : "Wendy",
//			"lastname" : "Chan",
//			"age" : 33
//		}, {
//			'_id':1003,
//			'email': 'dustin@demo.org',
//			"firstname" : "Dustin",
//			"lastname" : "Light",
//			"age" : 35
//		}, {
//			'_id':1004,
//			'email': 'luke@demo.org',
//			"firstname" : "Luke",
//			"lastname" : "Smith",
//			"age" : 47
//		}, ];
		
//		$scope.editUser = function(user) {
//			console.log('editing user=%j', user);
//			$scope.user = user;
//			
//			$scope.isNew = false;
//			
//			var modalInstance = $modal.open({
//			      templateUrl: 'myModalContent.html',
//			      resolve: {
//			        user: function () {
//			          return $scope.user;
//			        }
//			      }
//			    });
//			
//			modalInstance.result.then(function (selectedItem) {
//			      $scope.selected = selectedItem;
//			    }, function () {
//			      console.log('Modal dismissed at: ' + new Date());
//			    });
//			
//		};
//		$scope.editUser = function(user) {
//			if (user === 'new') {
//				$scope.isNew = true;
//				$scope.user = {firstname: '', lastname: '', age: ''};
//			}else{
//				$scope.isNew = false;
//				$scope.user = user;
//			}
//		};
		
//		$scope.save = function() {
//			if (!$scope.user._id) {
//				console.log('update mem list and saving new user=%j',$scope.user)
//			}else{
//				$scope.users.forEach(function(user) {
//					if (user._id === $scope.user._id) {
//						console.log('updating user=%j',$scope.user)
//					}
//				});
//			}
//		};
//
//		$scope.delete = function() {
//			$scope.users.forEach(function(user, index) {
//				if (user._id == $scope.user._id) {
//					console.log('update mem list and delete new user=%j',$scope.user)
//				}
//			});
//		};
//	});


