'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:apteka
 * @description
 * # apteka
 */
angular.module('doctor3App')
    .directive('apteka', Apteka)
    .constant('ApiPath', 'images')
    .service('AptekaService', AptekaService);

function Apteka() {
    return {
        templateUrl: 'views/templates/apteka.html',
        restrict: 'E',
        controller: AptekaCtrl,
        controllerAs: 'apt',
        bindToController: true
    };
}
AptekaCtrl.$inject = ['AptekaService'];

function AptekaCtrl(AptekaService) {
    var ctrl = this;
    var promise = AptekaService.getApteka();
    promise.then(function(response) {
        ctrl.apteka = response.data;
        console.log(ctrl.apteka);
    }).catch(function(error) {
        console.log("error occured");
    });

}

AptekaService.$inject = ['$http', 'ApiPath'];

function AptekaService($http, ApiPath) {
    var service = this;

    service.getApteka = function() {
        var response = $http({
            metod: "GET",
            url: (ApiPath + "/apteka.json")
        });
        return response;
    };
}