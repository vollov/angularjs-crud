'use strict';

var api_host_url = 'http://localhost:3000';

angular.module('appServices', [ ])
	.factory('UserX', function($resource) {
		return $resource(api_url_root + '/api/users/:id', {id: '@id'}, {
			update: {method:'PUT'}
		});
	})
	.factory('User', function($http){
		var users = [];
		
		$http.get(api_host_url + '/api/users').success(function(data, status, headers, config) {
			users = data;
			console.log('users=%j', users);
		});
		
		return {
			query: function(){
				return this.users;
			},
			get: function(key){
				return this.users[key];
			}
		}
	});

//
//app.service('userService', function() {
//	  this.userData = {yearSetCount: 0};
//
//	  this.user = function() {
//	        return this.userData;
//	  };
//
//	  this.setEmail = function(email) {
//	        this.userData.email = email;
//	  };
//
//	  this.getEmail = function() {
//	        return this.userData.email;
//	  };
//
//	  this.setSetCount = function(setCount) {
//	        this.userData.yearSetCount = setCount;
//	  };
//
//	  this.getSetCount = function() {
//	        return this.userData.yearSetCount;
//	  };
//	});