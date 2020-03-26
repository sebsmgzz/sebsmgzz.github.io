
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

    // Verify index for carousel
    carouselIndex = bulletIndex;
    if (carouselIndex >=  bullets.children.length) {
        carouselIndex = 0;
    }

    // Activate index
    bullets.children[carouselIndex].classList.remove("inactive");
    bullets.children[carouselIndex].classList.add("active");

    // Updated carousel index
    carouselIndex++;

    // Updated background
    main.className = "cover" + carouselIndex;

}
function toggleCarousel()
{
    toggleBullet(carouselIndex);
}

// Intervals
setInterval(toggleCarousel, 2500);
