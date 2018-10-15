'use strict';

/**
 * @ngdoc function
 * @name doctor2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the doctor2App
 */
angular.module('doctor2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
