$(document).ready(function(){
    $(".flip-card-front a").click(function(e){
      e.preventDefault();
      $(this).parents(".flip-card-inner").toggleClass("hover");
    });
  });