//Code to activate map with click, courtesy of Felipe Alarcon

var gmap = document.getElementById("map-overlay");

gmap.addEventListener("click", function () {
    gmap.style.pointerEvents = "none";
});
