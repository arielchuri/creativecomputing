// click anywhere in the document and this function will run
document.onclick = function(){
    //alert("Clicked in Document.")
}
//Store this location in the variable "myImage"
var myImage = document.getElementById("imageOne");
//Add a function to the "onclick" event for the location stored in the variable "myImag"
myImage.onclick = function() {
    console.log("Clicked imageOne");
}
var myHeadline = document.getElementById("headline");
myHeadline.onclick = function() {
    console.log("Clicked Headline");
    myHeadline.style.color = "#ff0000";
    myHeadline.style.backgroundColor = "#000000";
}
window.onload = function(){
    //this function will run after the page has finished loading.
    console.log("Page has loaded.")
}
//Find the item with ID "navMenu" and replace the HTML inside it with the following.
document.getElementById("navMenu").innerHTML =
    '<ul class="nav">'+
    '<li class="nav"><a href="index.html">Home</a></li>'+
    '<li class="nav"><a href="services.html">Services</a></li>'+
    '<li class="nav"><a href="about.html">About</a></li>'+
    '</ul>';
// Most of these lines store locations in the document that we can access later. Read them and try to find what they are pointing to in the html.
var myElement = document.getElementById("myElement");
var myListItems = document.getElementByTagName("li");
console.log("child nodes of Aside: ", myItems.childNodes.length);
var myAsideItems = document.getElementById("aside");
var myAsideList = myAsideItems.getElementsByTagName("li");
console.log(myAsideList);
