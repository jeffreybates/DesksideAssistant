// scroll to bottom



//clean all lists
$( "li" ).css("list-style" , "none");

//show/hide filtering

$(window).width(function(){
    if($(window).width()< 700){
$("#portfolio_controls").hide()
    }else{
 $("#portfolio_controls").show()  
    }
});

$(window).resize(function(){
    if($(window).width()< 700){
$("#portfolio_controls").hide()
    }else{
 $("#portfolio_controls").show()  

    }
});




//about section fading
// $(document).scroll(function ()
//         {
              
//                 $('#about').fadeTo(700, 0.5);
//                        });
          
// $(document).scroll(function ()
//         {
              
//                 $('#about').fadeTo(700, 0.5);
//                        });
// $(document).scrollTop(300);
// {
// 	 $('#about').fadeTo(700, 1.0);
// }

// 


//all

$( "#port_1").css("background-color","#60f8ff")

$( "#port_1").click(function() {
  $( "#portfolio_controls li").css("background-color","rgb(97,97,97)")
  $( "#port_1").css("background-color","#60f8ff")
  $( "#elem_1").show()
  $( "#elem_2").show()
  $( "#elem_3").show()
  $( "#elem_4").show()
  $( "#elem_5").show()
});

//ux

$( "#port_2").click(function() {
$( "#portfolio_controls li").css("background-color","rgb(97,97,97)")
  $( "#port_2").css("background-color","#60f8ff")
  $( "#elem_1").hide()
  $( "#elem_2").show()
  $( "#elem_3").hide()
  $( "#elem_4").hide()
  $( "#elem_5").hide()
});

//web

$( "#port_3").click(function() {
$( "#portfolio_controls li").css("background-color","rgb(97,97,97)")
  $( "#port_3").css("background-color","#60f8ff")
  $( "#elem_1").hide()
  $( "#elem_2").hide()
  $( "#elem_3").show()
  $( "#elem_4").hide()
  $( "#elem_5").hide()
});

//photography

$( "#port_4").click(function() {
  $( "#portfolio_controls li").css("background-color","rgb(97,97,97)")
  $( "#port_4").css("background-color","#60f8ff")
  $( "#elem_1").hide()
  $( "#elem_2").hide()
  $( "#elem_3").hide()
  $( "#elem_4").show()
  $( "#elem_5").hide()
});

//illustration

$( "#port_5").click(function() {
 $( "#portfolio_controls li").css("background-color","rgb(97,97,97)")
  $( "#port_5").css("background-color","#60f8ff")
  $( "#elem_1").hide()
  $( "#elem_2").hide()
  $( "#elem_3").hide()
  $( "#elem_4").hide()
  $( "#elem_5").show()
});
