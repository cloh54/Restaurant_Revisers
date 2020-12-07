/*global document, location, window*/

var seeSample = document.getElementById("sample");
var darklight = document.getElementById("dark");
var submit = document.getElementById("submit-button");

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
    
        for (i = 0; i < green.length; i++) {
            green[i].style.color = "#03C04A";
        }
        
        for (j = 0; j < white.length; j++) {
            white[j].style.color = "#F5F5F5";
        }
        
        for (k = 0; k < box.length; k++) {
            box[k].style.backgroundColor = "#505050";
            box[k].style.color = "#F5F5F5";
        }
    }
    else {
        darklight.style.backgroundColor = "black";
        darklight.style.color = "white";
        darklight.value = "Dark Mode";
        document.body.style.backgroundColor = "aliceblue";
        
        for (i = 0; i < green.length; i++) {
            green[i].style.color = "green";
        }
        
        for (j = 0; j < white.length; j++) {
            white[j].style.color = "black";
        }
        
        for (k = 0; k < box.length; k++) {
            box[k].style.backgroundColor = "white";
            box[k].style.color = "black";
        }
    }
});

submit.addEventListener('click', function() {
    "use strict";
    var i;
    var name = document.getElementById("rname").value;
    var desc = document.getElementById("rdesc").value;
    var csz = document.getElementById("csz").value;
    var phoneNum = document.getElementById("pnum").value;
    var email = document.getElementById("email").value;
    var img = document.getElementById("img").value;
    var img1 = document.getElementById("img1").value;
    var img2 = document.getElementById("img2").value;
    var menuSection = document.getElementById("sec").value;
    var dishName = document.getElementById("dname").value;
    var dishPrice = document.getElementById("price").value;
    var dishImg = document.getElementById("dimg").value;
    var dishDesc = document.getElementById("ddesc").value;
    var yelpLink = document.getElementById("yelp").value;
    var fbookLink = document.getElementById("fbook").value;
    var googbizLink = document.getElementById("googbiz").value;
    var backColor = document.getElementById("bcolor").value;
    var textColor = document.getElementById("tcolor").value;
    var navbarColor = document.getElementById("nbcolor").value;
    var titleFont = document.getElementById("tFont").value;
    var bodyFont = document.getElementById("bFont").value;
    
    var newSite = window.open();
    var html = "<html><head></head><body><h1 id=title class=txt>"+name+"</h1><nav><ul id=nav><li>Home</li><li>Menu</li><li>Contact us</li></ul></nav><section><h2 class=txt>Home</h2><img src="+img+"><img src="+img1+"><img src="+img2+"><p class=txt>"+desc+"</p><br></section><section><h2 class=txt>Menu</h2><h3 class=txt>" +menuSection+"</h3><img src="+dishImg+"><p class=txt>"+dishName+"</p><p class=txt>Price: "+dishPrice+"</p><p class=txt>Description: "+dishDesc+"</p><br></section><section><h2 class=txt>Contact Us</h2><p class=txt>Phone Number: "+phoneNum+"</p><p class=txt>email: "+email+"</p><p class=txt>City, State, Zip: "+csz+"</p><p class=txt>Yelp Link: "+yelpLink+"</p><p class=txt>Facebook Link: "+fbookLink+"</p><p class=txt>Google Business Page Link: "+googbizLink+"</p></section></body></html>";
    newSite.document.open();
    newSite.document.write(html);
    newSite.document.getElementById("nav").style.backgroundColor = navbarColor;
    newSite.document.body.style.backgroundColor = backColor;
    var txt = newSite.document.getElementsByClassName("txt");
    for (i = 0; i < txt.length; i++) {
        txt[i].style.color = textColor;
        txt[i].style.fontFamily = bodyFont;
    }
    newSite.document.getElementById("title").style.fontFamily = titleFont;
    
    newSite.document.close();
});
