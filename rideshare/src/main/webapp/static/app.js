import { angularJwt } from 'angular-jwt';
import { permission, uiPermission } from 'angular-permission';
import { mainController } from './js/controllers/main.controller.js';
import { passengerController } from './js/controllers/passenger.controller.js';
import { driverController } from './js/controllers/driver.controller.js';
import { historyController } from './js/controllers/history.controller.js';
import { slackLoginController } from './js/controllers/slackLogin.controller.js';
import { addCarController } from './js/controllers/addCar.controller.js';

//var = function scope
//const and let = block scope

// TODO: resolve view routing bugs related to authentication and logout

const app = angular.module('app', ['ui.router', permission, uiPermission, 'angular-jwt']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, jwtOptionsProvider){

	jwtOptionsProvider.config({
		authPrefix: '',
		tokenGetter: [function() {
			return localStorage.getItem('RideShare_auth_token');
		}]
	});

	$httpProvider.interceptors.push('jwtInterceptor');


	$urlRouterProvider.otherwise('/slackLogin');

	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'partials/main.html',
		controller: mainController
	})

	.state('slackLogin', {
		url: '/slackLogin',
		templateUrl: 'partials/slackLogin.html',
		controller: slackLoginController
	})

	.state('main.passenger',{
		url: '/passenger',
		templateUrl : 'partials/passenger.html',
		controller : passengerController
	})

	.state('main.driver',{
		url: '/driver',
		templateUrl : 'partials/driver.html',
		controller : driverController
	})

	.state('main.history',{
		url: '/history',
		templateUrl : 'partials/history.html',
		controller : historyController
	})

	.state('main.addCar' ,{
		url: '/addCar',
		templateUrl : 'partials/addCar.html',
		controller : addCarController
	})


});
