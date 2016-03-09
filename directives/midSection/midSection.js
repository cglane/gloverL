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
            var classArray = ['one-box','two-box','three-box','four-box'];
            _.each(classArray,function(el){
              if(el !== className){
                $('.'+el).toggleClass('shrink-go-to-center');
                $('.'+el + ' .video').css('display','block')
                $('.'+className).toggleClass('expand-go-to-center');
              }
            })
          }
          scope.showVideo = function(className,bool){
            console.log('showviedo')
            var html = "<video width='80%'  autoplay>"+
  "<source src='../../pics/WeDayVideo.mov' type='video/mp4'>"+
          "</video>"
          var html2 =
              "{  A wedding planning <br>application. }";

          if(bool == true){
            scope.shrinkCenter(className);
            $('.'+className +' p').html(html);
            $('.'+className).css('height','60%')
          }else{
            scope.shrinkCenter(className);
            $('.'+className +' p').html(html2);
            $('.'+className).css('height','40%')
          }
          }


        }
      };
    }]);

})();
