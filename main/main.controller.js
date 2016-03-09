(function(){
"use strict";

angular
  .module('main')
  .controller('MainController',function($interval,$scope,$state,$timeout){
    var lastScroll = 0;
    // var texture = $('#inner-div-four');
    // var canvas = $('.canvas-two');
    //make background of canvas element move with scroll
    var splitPercent = function(string,sign){
      var newArray = string.split('%');
      console.log(sign,'sign')
      if(sign === 'positive'){
        return (parseInt(newArray[0])+1)+'% '+(parseInt(newArray[1][1])+1)+'%';
        console.log((parseInt(newArray[0])+1)+'% '+(parseInt(newArray[1][1])+1)+'%')
      }else{
        console.log('negative')
        return (parseInt(newArray[0])-1)+'% '+(parseInt(newArray[1][1])-1)+'%';
      }
    }
    var lastScroll = 0;
  $(window).on('scroll',function(el){
    var currentScroll = $(window).scrollTop();
    console.log(currentScroll)
    if(currentScroll > 40){
      $('#return-top').css('opacity',1)
    }else{
      $('#return-top').css('opacity',0)

    }
    if(currentScroll > lastScroll){
      $('#inner-div-four').stop().animate({
        'background-position-x': '1%',
        'background-position-y': '+=1%'
          });
      $('.canvas-two').stop().animate({
          'background-position-x': '+=1%',
          'background-position-y': '1%'
          });
        $('#sliding-animation-animal').stop().animate({
              'background-position-x': '+=1%',
              'background-position-y': '1%'
              });
          lastScroll = currentScroll;
    }else if(currentScroll < lastScroll){
      $('#inner-div-four').stop().animate({
        'background-position-x': '1%',
        'background-position-y': '-=1%'
          });
      $('.canvas-two').stop().animate({
          'background-position-x': '-=1%',
          'background-position-y': '1%'
          });
          $('#sliding-animation-animal').stop().animate({
                'background-position-x': '-=1%',
                'background-position-y': '1%'
                });
          lastScroll = currentScroll;
    }
  })
  var animateLight= function(){
    var colors = ['green','yellow','orange','blue'];
    var lights = ['one-light','two-light','three-light','four-light'];
    var randomNumber = Math.floor(Math.random() * (lights.length - 0)) + 0;
    $('.'+lights[randomNumber]).addClass('expand-scale');
    $('.'+lights[randomNumber]).css('background-color',colors[randomNumber]);
      setTimeout(function () {
        $('.'+lights[randomNumber]).toggleClass('expand-scale');
      }, 500);
  }
  setInterval(function () {
    animateLight();
  }, 3000);
  $scope.returnTop = function(){
    console.log('hello')
    $('body').stop().animate({scrollTop:0}, '500');
  }
  });
})();
