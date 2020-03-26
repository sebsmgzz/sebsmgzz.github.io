
// DOM elements
const bullets = document.querySelector(".bullets");

// Event listeners
for (let i = 0; i < bullets.children.length; i++) {
    bullets.children[i].addEventListener( "click", bulletClicked);
}

// Functions
function bulletClicked() {

    // Inactivate all bullets
    for (let i = 0; i < bullets.children.length; i++) {
        bullets.children[i].classList.remove("active");
        bullets.children[i].classList.add("inactive");
    }

    // Activate clicked
    this.classList.remove("inactive");
    this.classList.add("active");

}