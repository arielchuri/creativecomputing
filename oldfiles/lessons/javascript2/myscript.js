document.onclick = function(){
    //alert("Clicked in Document.")
}

var myImage = document.getElementById("imageOne");
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
