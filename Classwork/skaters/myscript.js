window.onload = function(){
    //this function will run after the page has finished loading.
    console.log("Page has loaded.")
}
//Find the item with ID "navMenu" and replace the HTML inside it with the following.
document.getElementById("navMenu").innerHTML =
    '<ul class="nav">'+
    '<li class="nav"><a href="index.html">Home</a></li>'+
    '<li class="nav"><a href="beasts.html">Beasts</a></li>'+
    '<li class="nav"><a href="about.html">About</a></li>'+
    '</ul>';
// ---- Below is the section that shows the skater.
var mySkater = document.querySelector("#skater");  // Find the first item with id skater and save it to a variable.
console.log(mySkater.innerHTML);  // Spit the innerHTML to the console to make sure it works.
document.querySelector("#partane").onmouseup = function() {  // this finds the tag with the ID partane and uses the onmouseup method to apply a function below.
    mySkater.innerHTML = // This changes the innerHTML of mySkater to the text in quotes below.
    '<div class ="flex-container"> <div class ="flex-itemAside"> <aside> Al is a gnarly skater for Creature skateboards. He is regular and skate with the homies.<br> Partane is old school in the sense that he like to skate bowls and vert. <br> <br> Sponsors are Creature, Independent, Spitfire, Sabre, Nike, Commune <br> Hometown: Milwaukee WI, Stance: Regular, Age: 45, Status: Pro<br> <ol> <li> <img src ="AL_board.png" id ="imageOne" width ="300px" height ="500px"> <br></li> </ol> </aside> </div> <div class ="flex-item"> <article> <P id ="headline">AL PARTANE</P> <img src ="AP.jpg" width ="600px" height ="400px"><br> <img src ="AP_Air.jpg" id ="imageOne" width ="600px" height ="400px"><br> </article> </div></div>'
}
console.log(mySkater.innerHTML);
