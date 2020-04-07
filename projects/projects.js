
// DOM elements
const dropdowns = document.querySelectorAll(".dropdown");

// Event listeners
dropdowns.forEach( (dropdown) => dropdown.addEventListener("click", dropdownClicked));

// Event functions
function dropdownClicked() {
    
    this.classList.toggle("open");

    for(let i = 0; i < dropdowns.length; i++) {
        if(dropdowns[i] != this) {
            dropdowns[i].classList.remove("open");
        }
    }

}