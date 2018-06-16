// Grab navbar
var nav = document.getElementById("navbar");

// Change position of bar on scroll
window.onscroll = function () { navAppear() };

function navAppear() {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? nav.style.top = "0" : nav.style.top = "-50px";
}
