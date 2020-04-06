
// DOM elements
const containers = document.querySelectorAll(".container");
const contents = document.querySelectorAll(".contents");

// Event listeners
containers.forEach( (container) => container.addEventListener("click",containerClicked));

// Event functions
function containerClicked() {
    this.classList.toggle("fullsize");
    for(let i = 0; i < containers.length; i++) {
        if (containers[i] != this) {
            containers[i].classList.toggle("hidden");
        } else {
            contents[i].classList.toggle("show");
        }
    }
}

