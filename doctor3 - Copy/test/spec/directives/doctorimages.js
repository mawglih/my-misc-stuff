'use strict';

describe('Directive: doctorImages', function () {

  // load the directive's module
  beforeEach(module('doctor3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<doctor-images></doctor-images>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the doctorImages directive');
  }));
});
