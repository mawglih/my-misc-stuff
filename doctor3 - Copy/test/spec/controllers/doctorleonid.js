'use strict';

describe('Controller: DoctorleonidCtrl', function () {

  // load the controller's module
  beforeEach(module('doctor3App'));

  var DoctorleonidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DoctorleonidCtrl = $controller('DoctorleonidCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DoctorleonidCtrl.awesomeThings.length).toBe(3);
  });
});
