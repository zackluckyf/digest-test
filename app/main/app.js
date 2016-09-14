(function () {
  'use strict';
  angular.module('myApp', [])
    .controller('MyController', MyController);

  function MyController ($scope) {
    this.changed = false;
    var vm = this;
    this.name = 'hello world!';
    $scope.$watch(function () {
      return vm.name;
    }, function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue !== oldValue) {
        vm.changed = true;
      }
    });
    this.nameChange = function () {
      vm.name = 'bob';
    };
    $scope.$watch(function () {
      return vm.changed;
    }, function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue !== oldValue) {
        vm.name = 'overwatched';
      }
    });
  }
})();
