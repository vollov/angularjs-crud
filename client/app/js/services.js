'use strict';

var api_url_root = 'http://localhost:3000';

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
		});
		
		return {
			query: function(){
				return users;
			},
			get: function(key){
				return users[key];
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