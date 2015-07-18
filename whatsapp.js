// Wrapper around the wha.tools api for whatsaipp
//! whatsapp.js
//! version : 1.1.3
//! authors : Karan Shah
//! license : None

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.whatsapp = factory()
}(this, function () { 'use strict';
    var exports = {};

    exports.api_key = 'ADD_YOUR_OWN'
    exports.base_url = 'https://api.wha.tools/v1';

    exports.subscribe = function(){
	   	return Parse.Cloud.httpRequest({
	      method: "GET",
	      url: exports.base_url + '/subscribe?key=' + exports.api_key
	  });
	}
	
	exports.sendMessage = function(phoneNumber,message){
		return Parse.Cloud.httpRequest({
	      method: "POST",
	      url: exports.base_url + '/message',
	      params:{
	      	key:exports.api_key,
	      	to: phoneNumber,
	      	body: message
	      }
		});
   }

   	exports.history = function(start,end){

   		var args = ""
   		var delimit = "&"
   		if(start){
   			args += delimit+"start="+start
   		}
   		if (end){
   			args += delimit+"end="+end
   		}	
		return Parse.Cloud.httpRequest({
	      method: "GET",
	      url: exports.base_url + '/history?key=' + exports.api_key + args
		});
   }

   exports.getNickName = function(){
		return Parse.Cloud.httpRequest({
	      method: "GET",
	      url: exports.base_url + '/nickname?key=' + exports.api_key
		});
   }

   exports.setNickName = function(nickname){
		return Parse.Cloud.httpRequest({
	      method: "POST",
	      url: exports.base_url + '/nickname',
	      params:{
	      	key:exports.api_key,
	      	nickname: nickname,
	      }
		});
   }

   exports.status = function(status){
   		return Parse.Cloud.httpRequest({
	      method: "POST",
	      url: exports.base_url + '/status',
	      params:{
	      	key:exports.api_key,
	      	message: status,
	      }
		});	
   }

	// Image needs to be base64 encoded image
   exports.avatar = function(imageSrc){
   		return Parse.Cloud.httpRequest({
	      method: "POST",
	      url: exports.base_url + '/status',
	      params:{
	      	key:exports.api_key,
	      	src: imageSrc,
	      }
		});	
   }

	// the vCard file, encoded using base64. It must weight less than 1.5MB.
   exports.sendVCard = function(vcard){
   		return Parse.Cloud.httpRequest({
	      method: "POST",
	      url: exports.base_url + '/media/vcard',
	      params:{
	      	key:exports.api_key,
	      	to: phoneNumber,
	      	name:name,
	      	src: vcard,
	      }
		});	
   }

   exports.unsubscribe = function(){
   	  return Parse.Cloud.httpRequest({
	      method: "GET",
	      url: exports.base_url + '/unsubscribe?key=' + exports.api_key
	  });
   }
    exports.func = function func() {
    	console.log('I suck');
    }


    function _privateFunc() {}

    return exports;
}));