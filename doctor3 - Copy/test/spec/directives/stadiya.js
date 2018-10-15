'use strict';

describe('Directive: stadiya', function () {

  // load the directive's module
  beforeEach(module('doctor3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stadiya></stadiya>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stadiya directive');
  }));
});
