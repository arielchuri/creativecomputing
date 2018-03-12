$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    // Following are for 4 buttons. Look things up in the jQuery reference.
    $("#btn1").click(function(){
        $(this).text("ALL YOUR BASE ARE BELONG TO US");
        $("h1").toggle();
    });
    $("#btn2").click(function(){
        $("#square2").css("background-color","IndianRed");
    });
    $("#btn3").click(function(){
        $("#square3").animate({height:'150px'},2000);
    });
    $("#btn4").click(function(){
        $("#square4").css("background-color","DeepPink").animate({left: '400px'},100);
        $("#squaresDiv").animate({left: $("#test").val()});
    });
});
