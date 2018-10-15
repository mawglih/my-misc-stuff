'use strict';

describe('Controller: PicturecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('doctor3App'));

  var PicturecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PicturecontrollerCtrl = $controller('PicturecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PicturecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
