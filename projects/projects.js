
// DOM elements
const dropdowns = document.querySelectorAll(".dropdown");
const contents = document.querySelectorAll(".contents");
const plusIcons = document.querySelectorAll(".icons > i.fa-plus-square");
const minusIcons = document.querySelectorAll(".icons > i.fa-minus-square");

// Event listeners
dropdowns.forEach( (dropdown) => dropdown.addEventListener("click", dropdownClicked));

// Event functions
function dropdownClicked() {
    
    this.classList.toggle("open");

}