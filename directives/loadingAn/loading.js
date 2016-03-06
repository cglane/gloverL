(function () {
  "use strict";
  angular
    .module('main')
    .directive('loadingDirective', ['$location',function (location) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './directives/loadingAn/loading.html',
        link: function (scope, element, attributes) {
          console.log('hello')
            var screenWidth = window.innerWidth;
            var screenHeight= window.innerHeight;
            //change size of divs
            $('.jumbalaya').css('width',screenWidth + 'px')
            $('.jumbalaya').css('height',screenHeight + 'px')
            $('.jumbalaya p').css('width',screenWidth/20 + 'px');
            $('.jumbalaya p').css('font-size',screenWidth/20 + 'px');

            //my-name-border animation
            $('#my-name-insert').stop(true,false).animate({
                'height':'300px'
              },0);
              $('#my-name-insert').stop(true,false).animate({
                'width':'20%',
              },1500);
              //resize
              $(window).resize(function(){
                var screenWidth = window.innerWidth;
                var screenHeight= window.innerHeight;
                $('.jumbalaya').css('width',screenWidth + 'px')
                $('.jumbalaya').css('height',screenHeight + 'px');
                $('.jumbalaya p').css('font-size',screenWidth/20 + 'px');
                $('.jumbalaya div').css('width','20%')
              });
            //slide up and destroy
            var slideUp = function(id){
              $('#'+id).css('top','-400px');
              setTimeout(function () {
                $('#'+id).css('display','none')
              }, 1000);
            }
            //type text
            var typeText = function(id,word){
              var curIn = 1;
              var curStr = word[0]
              $('#'+id +' p').html(curStr);
              setInterval(function () {
                if (curIn < word.length) {
                  $('#'+id +' p').html(curStr + word[curIn]);
                  curStr = curStr + word[curIn];
                  curIn++;
                }
              }, 300);
            }
            //timeout animation
            var textArray = ['Web Developer','AngularJs','HTML5', 'CSS3', 'Bootstrap', 'jQuery'];
            var tar = $('#insert');
            var setTimeoutArray = function(textArray){
              $(tar).append('<p id = one>'+ textArray[0]+ '</p>');
              var a = setTimeout(function () {
                slideUp('one');
                $(tar).append('<p id = two>'+ textArray[1]+ '</p>');
              }, 3000);
              var b = setTimeout(function () {
                slideUp('two');
                $(tar).append('<p id = three>'+ textArray[2]+ '</p>');
              }, 6000);
              var c = setTimeout(function () {
                slideUp('three');
                $(tar).append('<p id =four>'+ textArray[3]+ '</p>');
              }, 8000);
              var d = setTimeout(function () {
                slideUp('four');
                $(tar).append('<p id = five>'+ textArray[4]+ '</p>');
              }, 10000);
              var e = setTimeout(function () {
                slideUp('five');
                $(tar).append('<p id = six>'+ textArray[5]+ '</p>');
              }, 11000);
              var f = setTimeout(function () {
                $('#name-logo .letter-two').css('transform','rotate(0deg)')
              }, 6000);
              //repeat animation clearing timeouts and text
              scope.repeatInfo = function(){
                $(tar).html('');
                clearTimeout(a);
                clearTimeout(b);
                clearTimeout(c);
                clearTimeout(d);
                clearTimeout(e);
                clearTimeout(f);
                setTimeoutArray(textArray);
              }
            }

            //change box size

            //animation
            var tar = $('#insert');
            typeText('my-name-insert','Charles Glover Lane');
            setTimeoutArray(textArray);
            //skip function
            scope.skipFun = function(){
              $('.jumbalaya').css('background-color','rgba(240, 240, 240, 1)');
              setTimeout(function () {
                scope.$apply(function(){
                  location.url('/main');
                })
              }, 500);
            }

        }
      };
    }]);

})();
