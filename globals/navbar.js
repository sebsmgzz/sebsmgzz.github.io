
// DOM elements
const navbar = document.querySelector("#navbar");
const button = document.querySelector("#navbar button");
const navbarRight = document.querySelector(".navbar-right");

// Event listeners
button.addEventListener("click", buttonClicked);

// Event functions
function buttonClicked() {
    navbarRight.classList.toggle("navbar-collapsed");
}