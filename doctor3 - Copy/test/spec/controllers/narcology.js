'use strict';

describe('Controller: NarcologyCtrl', function () {

  // load the controller's module
  beforeEach(module('doctor3App'));

  var NarcologyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NarcologyCtrl = $controller('NarcologyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NarcologyCtrl.awesomeThings.length).toBe(3);
  });
});
