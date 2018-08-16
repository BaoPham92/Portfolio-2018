// Grab navbar
const nav = document.getElementById("navbar");

// Change position of bar on scroll
window.onscroll = function () { navAppear() };

function navAppear() {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? nav.style.top = "0" : nav.style.top = "-80px";
}

// Testing event delegation for clicking "P" tags logging events in console.
document.querySelector('.animate').addEventListener('click', function (e) {
    e.target.nodeName === 'P' ? console.log(`A animation tag was clicked with ${e.target.innerHTML}`) : console.log("Error");
}) 