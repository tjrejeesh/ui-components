'use strict';

/**
 * @ngdoc function
 * @name reusableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reusableApp
 */

 angular.module('reusableApp')
 .directive('appName',function(){
 	return {
 		restrict : 'E',
 		templateUrl : 'views/app-name.html'
 	};
 });