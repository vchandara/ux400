'use strict';

describe('Controller: JsCtrl', function () {

  // load the controller's module
  beforeEach(module('ux400App'));

  var JsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsCtrl = $controller('JsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JsCtrl.awesomeThings.length).toBe(3);
  });
});
