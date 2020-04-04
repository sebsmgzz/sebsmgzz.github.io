
// DOM Elements
const anchores = document.querySelectorAll("a");
const icons = document.querySelectorAll(".icon");

// Event listeners
anchores.forEach( (anchore) => anchore.addEventListener("mouseenter",anchoreHovered));

// Event functions
function anchoreHovered() {
    const icon = this.querySelector(".icon");
    icon.classList.toggle("hovered");
}