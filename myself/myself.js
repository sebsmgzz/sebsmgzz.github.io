
// DOM elements
const button = document.querySelector(".header button");
const paragraph = document.querySelector(".header p");

// Event listeners
button.addEventListener("click",buttonClicked);

// Event functions
function buttonClicked() {
    paragraph.classList.toggle("show");
}