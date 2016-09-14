describe('MyApp', function () {
  'use strict';
  var scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    controller = $controller('MyController as mc', {
      $scope: scope
    });
    $rootScope.$digest();
  }));
  it('should give its name as hello world!', function () {
    expect(scope.mc.name).toEqual('hello world!');
  });
  it('should have a watcher', function () {
    expect(scope.$$watchersCount).toEqual(2);
  });
  it('should set change prop when watch is called', function () {
    scope.mc.nameChange();
    scope.$digest();
    expect(scope.mc.changed).toEqual(true);
  });
});
