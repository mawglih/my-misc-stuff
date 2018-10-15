'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:doctorImages
 * @description
 * # doctorImages
 */
angular.module('doctor3App')
    .directive('doctorImages', DoctorImages)
    .constant('ApiPath', 'images')
    .service('PictureGetService', PictureGetService);

function DoctorImages() {
    return {
        templateUrl: 'views/templates/doctorimages.html',
        restrict: 'E',
        controller: PictureControllerCtrl,
        controllerAs: 'list',
        bindToController: true
    };
}
PictureControllerCtrl.$inject = ['PictureGetService'];

function PictureControllerCtrl(PictureGetService) {
    var ctrl = this;
    var promise = PictureGetService.getPictures();
    promise.then(function(response) {
        ctrl.images = response.data;
        console.log(ctrl.images);
    }).catch(function(error) {
        console.log("error occured");
    });

}

PictureGetService.$inject = ['$http', 'ApiPath'];

function PictureGetService($http, ApiPath) {
    var service = this;

    service.getPictures = function() {
        var response = $http({
            metod: "GET",
            url: (ApiPath + "/images.json")
        });
        return response;
    };
}