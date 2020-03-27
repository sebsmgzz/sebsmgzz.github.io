
// DOM elements
const dropdowns = document.querySelectorAll(".dropdown");
const sections = document.querySelectorAll(".section");
const plusIcons = document.querySelectorAll(".icons > i.fa-plus-square");
const minusIcons = document.querySelectorAll(".icons > i.fa-minus-square");

// Event listeners
dropdowns.forEach( (dropdown) => dropdown.addEventListener("click", dropdownClicked));

// Event functions
function dropdownClicked() {
    
    // Find section index
    for (let i = 0; i < dropdowns.length; i++) {

        // Toggle
        if ( dropdowns[i] == this) {
            toggleSection(i);
        }

    }

}

// Inner functions
function toggleSection(sectionIndex) {

    // Deactivate everything but indexed
    for (let i = 0; i < sections.length; i++) {
        if (i != sectionIndex) {
            sections[i].classList.remove("active");
            plusIcons[i].classList.add("on");
            minusIcons[i].classList.remove("on");
        }
    }

    // Toggle indexed
    sections[sectionIndex].classList.toggle("active");
    plusIcons[sectionIndex].classList.toggle("on");
    minusIcons[sectionIndex].classList.toggle("on");
}