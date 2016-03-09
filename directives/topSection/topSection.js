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
          var bottomContent = [
            "Front End Engineering and Web Development with experience with AngularJs,Backbone,and the MEAN stack",
            "Graduated from Clemson University with a B.A in Language and International Trade, Magna Cum Laude, Phi Beta Kappa",
            "Taught English in China and attended Beijing Language and Culture University's intensive Chinese Language Program, HSK6, 北京语言大学 汉语学平考试六级",
            "Worked for South Carolina Department of Commerce as an Analyst and Chinese Traslator",
            "Worked for Tupper Builders and attend the Iron Yard Front End Engineering course"
          ];
          scope.bottomContent = bottomContent[0];
          scope.showContent = function(el){
            scope.bottomContent= bottomContent[el];
          }
          scope.textContent = function(){
            console.log('hdell')
            $('.middle-section').children('p').css('opacity','.5')
          }


        }
      };
    }]);

})();
