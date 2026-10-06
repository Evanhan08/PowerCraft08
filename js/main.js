var menuButton = document.getElementById("menu-btn");
var nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
});
