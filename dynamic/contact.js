
// DOM elements
const main = document.querySelector("#main");
const bullets = document.querySelector(".bullets");

// Locals
let carouselIndex = 0;

// Event listeners
for (let i = 0; i < bullets.children.length; i++) {
    bullets.children[i].addEventListener( "click", bulletClicked);
}

// Functions
function bulletClicked() {

    // Find my index
    for (let i = 0; i < bullets.children.length; i++) {
        if ( bullets.children[i] == this) {
            toggleBullet(i);
        }
    }

}
function toggleBullet(bulletIndex) {

    // Inactivate everything
    for (let i = 0; i < bullets.children.length; i++) {
        bullets.children[i].classList.remove("active");
        bullets.children[i].classList.add("inactive");
    }

    // Activate index
    bullets.children[bulletIndex].classList.remove("inactive");
    bullets.children[bulletIndex].classList.add("active");

    // Updated background
    let covertIndex = bulletIndex+1;
    main.className = "cover" + covertIndex;

}
function carousel()
{

    // Update index for carousel
    carouselIndex++;
    if (carouselIndex >=  bullets.children.length) {
        carouselIndex = 0;
    }

    // Apply update
    toggleBullet(carouselIndex);

}

// Intervals
setInterval(carousel, 2500);
