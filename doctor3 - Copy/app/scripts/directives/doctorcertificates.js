'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:doctorCertificates
 * @description
 * # doctorCertificates
 */
angular.module('doctor3App')
    .directive('doctorCertificates', DoctorCertificates)
    .constant('ApiPath', 'images')
    .service('CertificateGetService', CertificateGetService);

function DoctorCertificates() {
    return {
        templateUrl: 'views/templates/doctorcertificates.html',
        restrict: 'E',
        controller: CertificateControllerCtrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
}
CertificateControllerCtrl.$inject = ['CertificateGetService'];

function CertificateControllerCtrl(CertificateGetService) {
    var ctrl = this;
    var promise = CertificateGetService.getCertificates();
    promise.then(function(response) {
        ctrl.certs = response.data;
        console.log(ctrl.certs);
    }).catch(function(error) {
        console.log("error occured");
    });

}

CertificateGetService.$inject = ['$http', 'ApiPath'];

function CertificateGetService($http, ApiPath) {
    var service = this;

    service.getCertificates = function() {
        var response = $http({
            metod: "GET",
            url: (ApiPath + "/certificates.json")
        });
        return response;
    };
}