/*global document, location*/

var exitSample = document.getElementById("exit");

exitSample.addEventListener('click', function () {
    "use strict";
    location.replace("index.html");
});