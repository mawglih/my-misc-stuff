'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:sfl
 * @description
 * # sfl
 */
angular.module('doctor3App')
    .directive('sfl', function() {
        return {
            template: 'views/templates/sfl.html',
            restrict: 'E'
        };
    });