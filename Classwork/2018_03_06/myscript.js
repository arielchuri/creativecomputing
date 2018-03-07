//This is a comment. Below is a line of code that has been commented out.
//alert("Hello World.");
console.log("Hello World too."); //This line prints to the console.
var fredVariable; //This creates a variable
var tammyVariable;
fredVariable = 42; //This sets a variable
tammyVariable = "HI!!!";
console.log(fredVariable);
console.log(fredVariable," and ",tammyVariable);

//var <name of variable> = fredVariable <+ - * /> <#>;
var nameVariable = fredVariable * 3;
if (nameVariable >= 56) {
    console.log("nameVariable is greater than 56");
}

if (nameVariable >= 56) {
    console.log("nameVariable is greater than 56");
} else {
    console.log("nameVariable is not greater than 56");
}
for (var n = 0; n < 100; n++) {
  //  console.log(n);
}
for (var r = 0; r < fredVariable; r++) {
    nameVariable = nameVariable + 12;
 //   console.log(nameVariable);
}
var myArray = []; //This creates an array of variables.
for (var i = 0; i < 100; i++) { //This loops through the following code 30 times.f
	myArray[i] = 1; //This puts the number one in position 0-29 of the array.
}
//The following lines create a function.
function addOrSubtract(firstNumber,secondNumber,plusOrMinus){
  if (plusOrMinus == "plus"){
    answerVariable = firstNumber + secondNumber;
  }else{
    answerVariable = firstNumber - secondNumber;
  }
  console.log(answerVariable);
} // Type this into the console: addOrSubtract(10,3,"minus); 
// You can change the numbers to get different answers.
