(function () {
  "use strict";
  angular
    .module('main')
    .directive('boSection', ['$location',function (location) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './directives/boSection/boSection.html',
        link: function (scope, element, attributes) {



        }
      };
    }]);

})();
