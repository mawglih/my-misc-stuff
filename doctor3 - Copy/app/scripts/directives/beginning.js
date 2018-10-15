'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:beginning
 * @description
 * # beginning
 */
angular.module('doctor3App')
    .directive('beginning', function() {
        return {
            templateUrl: 'views/templates/beginning.html',
            restrict: 'E'
        };
    });