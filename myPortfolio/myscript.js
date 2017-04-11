$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    //The next line puts an "on click" handler and is almost the same but it calls a named function.
    document.getElementById("nav").innerHTML = 
        '<div id="hamburger">'+
    		'Hamburger'+
    	'</div>'+
    	'<div id="menu">'+
    		'<a href="index.html">Home</a><br>'+
    		'<a href="portfolio.html">Portfolio</a><br>'+
    		'<a href="contact.html">Contact</a><br>'+
    	'</div>';
    $("#hamburger").on("click", function(evt) {
        menuSlide("#menu");                                   });
    $("#menu").hide();
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.

function menuSlide(myObject) {
    $(myObject).slideToggle("slow");
}
