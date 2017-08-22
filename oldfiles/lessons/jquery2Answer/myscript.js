$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    //In the next line we select the item with the ID "myList" and then the first "li" in that item.
    //We add a ".on" event handler with "mouseover" and create an anonymous function which runs when the event is triggered.
    $("#myList li:first").on("mouseover", function(evt){
        //Do you know what this next line does? Look up the .css() method.
        $(this).css("color","green");
    });
    //The next line puts an "on click" handler and is almost the same but it calls a named function.
    $("#myList li:nth-child(2)").on("click", swapMe);
    //This uses a shorthand way attaching a click handler.
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
        //Now I run myFunction4 with "#square4" as the argument
        myFunction4("#square4");
                                   });
    $("#square4").hide();
    //Now I start answering the homework.
    // this puts the text from "h1" in the thing marked pre when "#square1" is clicked.
    $("#square1").click( function() {
        $("pre").text($("h1").text());
    })
    // This puts a new quote in "h1" when "#square1" is double clicked.
    $("#square1").dblclick( function() {
        $("h1").text("Beer is proof that there is a god and that he loves us.");
    })
    // This animates "square3" when you hover over "#square2"
    $("#square2").mouseenter(function(){
        $("#square3").animate({left:"100px",width:"10px"}, "slow")
            .animate({left:"+=300px"});
    })
    // Code to change the box color:
    $("button").click(function(){
        // Get the value of the text boxes and store them in variables.
        var myColor = $("input:last").val();
        var myVal = $("input:first").val();
        // Use an "if statement" to only change the chosen box.
        if (myVal == 1) {
            $("#mySquare1").css("background-color", myColor );
            console.log("one" + myVal);
        } else if (myVal == 2) {
            $("#mySquare2").css("background-color", myColor );
            console.log("two" + myVal);
        } else {
            $("#mySquare3").css("background-color", myColor );
            console.log("three " + myVal);
        }
    })
    // Here is a second button that does the same thing. See how we do it all in one line?
    $("#button2").click(function(){
        $("#mySquare"+$("input:first").val()).css("background-color",$("input:last").val());
      //$(SELECTOR+code to get the first input box).css("background-color",code to get the last input box);
    })
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
function swapMe() {
    // create a variable and store the contents of the third item.
    var tempText = $("#myList li:nth-child(3)").text();
    // Replace the contents of the 3rd item with the contents of the 4rth.
    $("#myList li:nth-child(3)").text($("#myList li:nth-child(4)").text());
    // Replace the contents of item 4 with the contents of the "tempText".
    $("#myList li:nth-child(4)").text(tempText);
};
function myFunction2() {
    // Change the css
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function myFunction3() {
    //Here is a neat one. Add a new class to tag so it takes on a whole new look.
    //Also, because it uses "this" the same function can be used on many items.
    $(this).toggleClass("long-shadow");
};
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}
