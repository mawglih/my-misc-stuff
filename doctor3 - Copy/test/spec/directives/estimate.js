'use strict';

describe('Directive: estimate', function () {

  // load the directive's module
  beforeEach(module('doctor3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<estimate></estimate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the estimate directive');
  }));
});
