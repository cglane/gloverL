(function () {
  "use strict";
  angular
    .module('main')
    .directive('topSection', ['$location',function (location) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './directives/topSection/topSection.html',
        link: function (scope, element, attributes) {



        }
      };
    }]);

})();
