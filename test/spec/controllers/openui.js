'use strict';

describe('Controller: OpenuiCtrl', function () {

  // load the controller's module
  beforeEach(module('ux400App'));

  var OpenuiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenuiCtrl = $controller('OpenuiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenuiCtrl.awesomeThings.length).toBe(3);
  });
});
