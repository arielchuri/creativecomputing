$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    var numeral01;
    var numeral02;
    var operatorVar;
    $("#n01").click(numeral01 = 1);
    $("#n02").click(numeral02 = 2);
    $("#plus").click(operatorVar = "plus");
    $("#equals").click(calculate(numeral01, numeral02));
});
function calculate(a,b) {
    var c;
    c = a + b;
    $("#answer").html(c);
    // console.log(c);
}
