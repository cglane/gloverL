(function () {
  "use strict";
  angular
    .module('main')
    .directive('middleSection', ['$location',function (location) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './directives/midSection/midSection.html',
        link: function (scope, element, attributes) {
          scope.shrinkCenter = function(className){
            console.log('click',className)
            var classArray = ['one','two','three','four'];
            _.each(classArray,function(el){
              if(el !== className){
                console.log(el,'el')
                $('.'+el).toggleClass('shrink-go-to-center')
                $('.'+className).toggleClass('expand-go-to-center')


              }
            })
          }


        }
      };
    }]);

})();
