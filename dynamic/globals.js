
// DOM elements
const Nav = document.querySelector("body nav");
const NavButton = document.querySelector("body nav div button");
const NavRight = document.querySelector(".NavRight");

// Event listeners
NavButton.addEventListener("click", navbarToggle);

// Functions
function navbarToggle() {
    NavRight.className = (NavRight.className === "NavRight collapsed") ? "NavRight uncollapsed" : "NavRight collapsed";
}