'use strict';

/**
 * @ngdoc function
 * @name doctor3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doctor3App
 */
angular.module('doctor3App')
    .controller('MainCtrl', MainCtrl);

function MainCtrl() {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}