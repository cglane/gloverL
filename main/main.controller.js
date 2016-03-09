(function(){
"use strict";

angular
  .module('main')
  .controller('MainController',function($interval,$scope,$state,$timeout,$location){
    var lastScroll = 0;
    setTimeout(function () {
      $('#top-section').stop().animate({
        backgroundSize:'100%'
      },500,"linear")
    }, 4000);
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
      $('#top-section').stop().animate({
        backgroundSize:'100%'
      },500,"linear")

    if(currentScroll > 40){
      $('#nav-bar').css('top','-100px')
      $('#return-top').css('opacity',1)
    }else{
      $('#nav-bar').css('top','0px')
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
  // var animateLight= function(){
  //   var colors = ['rgb(250,245,250)','yellow','orange','blue'];
  //   var lights = ['one-light','two-light','three-light','four-light'];
  //   var randomNumber = Math.floor(Math.random() * (lights.length - 0)) + 0;
  //   $('.'+lights[randomNumber]).addClass('expand-scale');
  //   $('.'+lights[randomNumber]).css('background-color',colors[randomNumber]);
  //     setTimeout(function () {
  //       $('.'+lights[randomNumber]).toggleClass('expand-scale');
  //     }, 500);
  // }
  // setInterval(function () {
  //   animateLight();
  // }, 3000);
  $scope.returnTop = function(){
    console.log('hello')
    $('body').stop().animate({scrollTop:0}, '500');
  }
  $scope.goTo = function(arg){
    if(arg === 'landing'){
      $location.path("#/")
    }
    if(arg === 'porfolio'){
      $('body').stop().animate({scrollTop:1500}, '500');
    }
    if(arg === 'contact'){
      $('body').stop().animate({scrollTop:3000}, '500');
    }


  }
  });
})();
