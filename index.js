/*global document, location*/

var seeSample = document.getElementById("sample");
var darklight = document.getElementById("dark");

seeSample.addEventListener('click', function () {
    "use strict";
    location.replace("home.html");
});

darklight.addEventListener('click', function () {
    "use strict";
    var i, j, k;
    var green = document.getElementsByClassName("changeGreen");
    var white = document.getElementsByClassName("changeWhite");
    var box = document.getElementsByClassName("changeBox");
    if (darklight.value === "Dark Mode") {
        darklight.style.backgroundColor = "white";
        darklight.style.color = "black";
        darklight.value = "Light Mode";
        document.body.style.backgroundColor = "#404040";
    
        for (i=0; i<green.length; i++) {
            green[i].style.color = "#03C04A";
        }
        
        for (j=0; j<white.length; j++) {
            white[j].style.color = "#F5F5F5";
        }
        
        for (k=0; k<box.length; k++) {
            box[k].style.backgroundColor = "#505050";
            box[k].style.color = "#F5F5F5";
        }
    }
    else {
        darklight.style.backgroundColor = "black";
        darklight.style.color = "white";
        darklight.value = "Dark Mode";
        document.body.style.backgroundColor = "aliceblue";
        
        for (i=0; i<green.length; i++) {
            green[i].style.color = "green";
        }
        
        for (j=0; j<white.length; j++) {
            white[j].style.color = "black";
        }
        
        for (k=0; k<box.length; k++) {
            box[k].style.backgroundColor = "white";
            box[k].style.color = "black";
        }
    }
});
