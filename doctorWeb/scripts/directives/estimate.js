'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:estimate
 * @description
 * # estimate
 */
angular.module('doctor3App')
    .directive('estimate', Estimate);

function Estimate() {
    var ddo = {
        templateUrl: 'views/templates/estimate.html',
        restrict: 'E'
    };
    return ddo;

}