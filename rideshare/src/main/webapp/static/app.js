import { landingSampleController } from './js/controllers/landingSample.controller.js';
import { passengerController } from './js/controllers/passenger.controller.js';
import { driverController } from './js/controllers/driver.controller.js';
import { historyController } from './js/controllers/history.controller.js';

//var = function scope
//const and let = block scope 

const app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	
		.state('home',{
			url: '/home',
			templateUrl : 'partials/landingsample.html',
			controller : landingSampleController
		})

		.state('success',{
			url: '/success',
			templateUrl: 'partials/successSample.html',
			controller: function($scope, $http){
			}
		})

		.state('passenger',{
			url: '/passenger',
			templateUrl : 'partials/passenger.html',
			controller : passengerController
		})
		
		.state('driver',{
			url: '/driver',
			templateUrl : 'partials/driver.html',
			controller : driverController
		})
		
		.state('history',{
			url: '/history',
			templateUrl : 'partials/history.html',
			controller : historyController
		})
		
	
	
});