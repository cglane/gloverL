(function () {
  "use strict";
  angular
    .module('main')
    .directive('breakSection', ['$location',function (location) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './directives/break/break.html',
        link: function (scope, element, attributes) {

  

        }
      };
    }]);

})();
