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
    var i, j, k;
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
    var navbarText = document.getElementById("nbtcolor").value;
    
    var newSite = window.open();
    var html = "<html><head></head><body><h1 id=title class=txt>"+name+"</h1><nav><ul id=nav><li class=lis><a class=target href=#targetHome>Home</a></li><li class=lis><a class=target href=#targetMenu>Menu</a></li><li class=lis><a class=target href=#targetContact>Contact us</a></li></ul></nav><section><h2 class=txt><a name=targetHome>Home</a></h2><img src="+img+"><img src="+img1+"><img src="+img2+"><p class=txt>"+desc+"</p><br></section><section><h2 class=txt><a name=targetMenu>Menu</a></h2><h3 class=txt>" +menuSection+"</h3><img src="+dishImg+"><p class=txt>"+dishName+"</p><p class=txt>Price: "+dishPrice+"</p><p class=txt>Description: "+dishDesc+"</p><br></section><section><h2 class=txt><a name=targetContact>Contact Us</a></h2><p class=txt>Phone Number: "+phoneNum+"</p><p class=txt>email: "+email+"</p><p class=txt>City, State, Zip: "+csz+"</p><p class=txt>Yelp Link: "+yelpLink+"</p><p class=txt>Facebook Link: "+fbookLink+"</p><p class=txt>Google Business Page Link: "+googbizLink+"</p></section></body></html>";
    newSite.document.open();
    newSite.document.write(html);
    newSite.document.body.style.width = "1000px";
    newSite.document.body.style.margin = "0 auto";
    newSite.document.body.style.paddingTop = "30px";
    var nav = newSite.document.getElementById("nav");
    nav.style.backgroundColor = navbarColor;
    nav.style.listStyleType = "none";
    nav.style.margin = 0;
    nav.style.padding = 0;
    nav.style.overflow = "hidden";
    newSite.document.body.style.backgroundColor = backColor;
    var txt = newSite.document.getElementsByClassName("txt");
    for (i = 0; i < txt.length; i++) {
        txt[i].style.color = textColor;
        txt[i].style.fontFamily = bodyFont;
    }
    var navli = newSite.document.getElementsByClassName("lis");
    for (j = 0; j < navli.length; j++) {
        navli[j].style.float = "left";
        navli[j].style.display = "block";
        navli[j].style.textAlign = "center";
        navli[j].style.padding = "10px 100px";
    }
    newSite.document.getElementById("title").style.fontFamily = titleFont;
    var navlinks = newSite.document.getElementsByClassName("target");
    for (k = 0; k < navlinks.length; k++) {
        navlinks[k].style.textDecoration = "none";
        navlinks[k].style.color = navbarText;
    }
    newSite.document.close();
});
