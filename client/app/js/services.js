'use strict';

var api_url_root = 'http://localhost:3000';

angular.module('appServices', [ ])
	.factory('Setting', function($http, $q) {
		var deffered = $q.defer();
		var settingService = {}; 
		
		// define functions in the service
		settingService.async = function(){
			$http.get(api_url_root +'/api/setting/1').success(function(data){
				localStorage.setting = JSON.stringify(data);
				deffered.resolve();
			});
			return deffered.promise;
		};
		
		// return null if setting is not set
		settingService.get = function(){
			if(localStorage.getItem('setting') === null){
				return null;
			}else{
				return JSON.parse(localStorage.setting);
			}
		};
		
		settingService.save = function(s){
			$http.put(api_url_root +'/api/setting/1',s).success(function(data){
				localStorage.setting = JSON.stringify(data);
				deffered.resolve();
			});
			return deffered.promise;
		};
		
		return settingService;
	})
	.factory('PostCode', function($http, $q){
		var deffered = $q.defer();
		var postcodeService = {} ;

		/**
		 * define functions
		 */
		// Total number of records, return {total: 4433}
		postcodeService.total = function(){
			$http.get(api_url_root +'/api/postcode/count').success(function(data){
				localStorage.postcode_count = data.total;
				deffered.resolve();
			});
			return deffered.promise;
		};
		
		// get a segment of post codes
		postcodeService.async = function(segment){
			$http.get(api_url_root +'/api/postcodes/'+ segment).success(function(data){
				localStorage.postcodes = JSON.stringify(data);
				localStorage.currentSegment = segment;
				deffered.resolve();
			});
			return deffered.promise;
		};
		
		postcodeService.getPostCodes = function(){
			if(localStorage.getItem('postcodes') === null){
				return null;
			}else{
				return JSON.parse(localStorage.postcodes);
			}
		};
		
		postcodeService.getTotal = function(){
			if(localStorage.getItem('postcode_count') === null){
				return null;
			}else{
				return localStorage.postcode_count;
			}
		};
		
		postcodeService.getPage = function(i, recordsPerPage){
			var postcodes = JSON.parse(localStorage.postcodes);
			var page = _.first(postcodes, i * recordsPerPage);
			page = _.last(page, recordsPerPage);
			return page;
		};
	})
	.factory('PageService', function(Setting){
		var setting = Setting.get();
		return {
			// check if next segment exists
			hasNextSegment : function(total, segment, current_segment_size){
				
				var segmentSize = setting.recordsPerPage * setting.pagesPerSegment;
				var recordsPulled = 0;
				
				if(segment > 1) {
					recordsPulled = segmentSize * (segment - 1) + current_segment_size;
				}else{
					recordsPulled = current_segment_size;
				}
				
				if(recordsPulled < total) {
					return true;
				} else {
					return false;
				}
			}
		}
	});


//	.factory('User', function($http){
//		var users = [];
//		
//		$http.get(api_host_url + '/api/users').success(function(data, status, headers, config) {
//			users = data;
//		});
//		
//		return {
//			query: function(){
//				return users;
//			},
//			get: function(key){
//				return users[key];
//			}
//		}
//	});

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