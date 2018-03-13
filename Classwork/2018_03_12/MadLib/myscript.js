$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    $("#story").toggle();
    $("#submit").click(function(){
        $("#word01").html($("#field01").val());
        $("#question").toggle();
        $("#story").toggle();
    });
});
