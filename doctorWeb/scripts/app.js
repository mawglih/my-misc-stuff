'use strict';

/**
 * @ngdoc overview
 * @name doctor3App
 * @description
 * # doctor3App
 *
 * Main module of the application.
 */
angular
    .module('doctor3App', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/narcology', {
                templateUrl: 'views/narcology.html',
                controller: 'NarcologyCtrl',
                controllerAs: 'narcology'
            })
            .when('/doctorLeonid', {
                templateUrl: 'views/doctorleonid.html',
                controller: 'DoctorleonidCtrl',
                controllerAs: 'doctorLeonid'
            })
            .when('/contacts', {
                templateUrl: 'views/contacts.html',
                controller: 'ContactsCtrl',
                controllerAs: 'contacts'
            })
            .when('/estimate', {
                templateUrl: 'views/estimate.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

$("#navbarToggle").blur(function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $("#js-navbar-collapse").collapse('hide');
    }
});

//set jumbotron screen height
var newHeight = 0.8 * $(window).height();
$('.jumbotron').css('max-height', newHeight);