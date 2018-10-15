'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:stadiya
 * @description
 * # stadiya
 */
angular.module('doctor3App')
    .directive('stadiya', function() {
        return {
            templateUrl: 'views/templates/stadiya.html',
            restrict: 'E'
        };
    });