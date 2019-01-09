//'use strict';
$(document).ready(function(){
var navList = document.querySelector(".buttons");  
let buttons = $(navList).children();
for ( let button of buttons ){
  button.addEventListener('click', () => {
     var id = button.getAttribute("id");
     var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(layerClass);
     if($('div').hasClass( "active" )){
      $('div').removeClass("active")
    };
     for (let layer of layers) {
       layer.classList.toggle("active");
     }
  });
};
$('.buttons li').click(function(){
  if($('.buttons li').hasClass( "activeBtn" )){
  $('.buttons li').removeClass("activeBtn")
};

    $(this).addClass("activeBtn")
  

 });
$('.buttons li i').hover(
  function(){ $(this).addClass('animated infinite rubberBand delay-0.5s') },
  function(){ $(this).removeClass('animated infinite rubberBand delay-0.5s') });
  
  document.querySelector('.download').onmousemove = function (e) {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  
  };
  
$('.textArea').on('keyup',function(){
  $(this).css('height','auto');
  $(this).height(this.scrollHeight);
});
$('input[type = submit]').mouseover(function(){
  $( '.send' ).css('color', '#d3d3d3');;
});
$('input[type = submit]').mouseout(function(){
  $( '.send' ).css('color', 'inherit');
});

});
/*
$(document).ready(function(){
const buttons = document.querySelector("button");
$(buttons).click(function(){
    var id = button.getAttribute("id");
     var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(layerClass);
     for(const layer of layers){
    $(layer).classList.toggle(".active");}

});
});*/
