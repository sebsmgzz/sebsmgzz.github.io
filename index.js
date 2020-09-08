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
function setCurrentPage(index) {
    if(-1 < index && index < pages.length) {
        pages[currentPage].classList.toggle("hidden-content");
        pages[index].classList.toggle("hidden-content");
        currentPage = index;
        $(".navbar-collapse").collapse('hide');
        return true;
    }
    return false;
}