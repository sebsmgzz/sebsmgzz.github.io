// Globals
var currentPage = 0;
var pages = [
    document.querySelector("#profile"),
    document.querySelector("#education"),
    document.querySelector("#career"),
    document.querySelector("#skills"),
    document.querySelector("#contact")
];

// Functions
function initializePage() {
    pages[0].appendChild(getProfile());
    pages[1].appendChild(getEducation());
    pages[2].appendChild(getCareer());
    pages[3].appendChild(getSkills());
    pages[4].appendChild(getContact());
    // TODO: remove spinner
}
function setCurrentPage(index) {
    if(-1 < index && index < pages.length) {
        pages[currentPage].classList.toggle("hidden-content");
        pages[index].classList.toggle("hidden-content");
        currentPage = index;
        return true;
    }
    return false;
}

// Listeners
document.addEventListener("DOMContentLoaded", initializePage);