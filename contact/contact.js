
// DOM elements
const main = document.querySelector("#main");
const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");
const backgrounds = document.querySelectorAll(".background");
const bullets = document.querySelectorAll(".bullet");

// Locals
let autoCarousel = true;
let globalIndex = 0;

// Event listeners
bullets.forEach( (bullet) => bullet.addEventListener("click",bulletClicked));

// Event functions
function bulletClicked() {

    // Disable timed function
    autoCarousel = false;

    // Find my index
    for (let i = 0; i < bullets.length; i++) {

        // Toggle with my index
        if ( bullets[i] == this) {
            toggleBullet(i);
            toggleCarousel(i);
            globalIndex++;
        }

    }

}

// Inner functions
function toggleBullet(bulletIndex) {

    // Inactivate everything
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove("active");
        bullets[i].classList.add("inactive");
    }

    // Activate index
    bullets[bulletIndex].classList.remove("inactive");
    bullets[bulletIndex].classList.add("active");

}
function toggleCarousel(carouselIndex) {

    // Iterate per elements
    for (let i = 0; i < titles.length; i++) {

        // Declare variables
        let classToRemoveA;
        let classToRemoveB;
        let classToAdd;

        // Move to left
        if (i < carouselIndex) {
            classToRemoveA = "center";
            classToRemoveB = "right";
            classToAdd = "left";
        }

        // Move to center
        if ( i == carouselIndex) {
            classToRemoveA = "left";
            classToRemoveB = "right";
            classToAdd = "center";
        }

        // Move to right
        if( i > carouselIndex) {
            classToRemoveA = "left";
            classToRemoveB = "center";
            classToAdd = "right";
        }

        // Update
        titles[i].classList.remove(classToRemoveA,classToRemoveB)
        contents[i].classList.remove(classToRemoveA,classToRemoveB)
        backgrounds[i].classList.remove(classToRemoveA,classToRemoveB)
        titles[i].classList.add(classToAdd)
        contents[i].classList.add(classToAdd)
        backgrounds[i].classList.add(classToAdd)

    }

}

// Intervals
function nextCarouselBullet()
{

    // Verfiy
    if (!autoCarousel) {
        return;
    }

    // Get next carousel index
    ++globalIndex;

    // Verify index for carousel
    if (globalIndex >=  bullets.length) {
        globalIndex = 0;
    }

    // Update
    toggleBullet(globalIndex);
    toggleCarousel(globalIndex);

}

// Once in ejecution
setInterval(nextCarouselBullet, 4000);