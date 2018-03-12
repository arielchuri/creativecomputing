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
