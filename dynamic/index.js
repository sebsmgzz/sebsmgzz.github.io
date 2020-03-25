
// DOM elements
const scrollerUp = document.querySelector("#scroller button:first-child");
const scrollerDown = document.querySelector("#scroller button:last-child");
const scrollerYear = document.querySelector("#scroller .year");
const scrollerMonth = document.querySelector("#scroller .month");
const rows = document.querySelectorAll("#main > div:not(:last-child)")

// Local variables
let scrollerRow = 1;

// Event listeners
window.addEventListener("scroll", windowScrolled);
scrollerUp.addEventListener( "click", scrollerUpClick);
scrollerDown.addEventListener( "click", scrollerDownClick);

// Functions
function windowScrolled() {

    // Define visible area
    let thresholdTop = window.scrollY; 
    let thresholdBottom = window.scrollY + window.innerHeight;

    // Iterate per row element
    for (let i = 1; i < rows.length; i++ ) {

        // Define row DOM elements
        let rowLeftContent = rows[i].children[0];
        let rowRightContent = rows[i].children[2];
        let rowImage = rows[i].children[1].children[0];

        // Define row attributes
        let rowTopPosition = rows[i].offsetTop;
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;

        // Define locals
        let classToRemove;
        let classToAdd;

        // Row is in visible area
        if (thresholdBottom > rowTopPosition) {
            classToRemove = "hidden";
            classToAdd = "visible";
            
            if (rowBottomPosition < thresholdBottom) {
                scrollerUpdate(i);
            }

        }

        // Row is above or below visible area
        if (rowTopPosition > thresholdBottom || rowBottomPosition < thresholdTop ) {
            classToRemove = "visible";
            classToAdd = "hidden";
        }

        // Toggle classes
        rowLeftContent.classList.remove(classToRemove);
        rowRightContent.classList.remove(classToRemove);
        rowImage.classList.remove(classToRemove);
        rowLeftContent.classList.add(classToAdd);
        rowRightContent.classList.add(classToAdd);
        rowImage.classList.add(classToAdd);

    }

}
function scrollerUpClick() {

    // Define top limit
    let windowTopPosition = window.scrollY;

    // Iterate per row
    for (let i = rows.length - 1; i >= 0; i-- ) {

        // Declare row position
        let rowTopPosition = rows[i].offsetTop;

        // Scroll to row top
        if (windowTopPosition > rowTopPosition) {
            window.scrollTo(0,rowTopPosition);
            return;
        }

    }

}
function scrollerDownClick() {

    // Define bottom limit
    let windowBottomPosition = window.scrollY + window.innerHeight;

    // Iterate per row
    for (let i = 0; i < rows.length; i++ ) {

        // Declare row position
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;

        // Scroll to row bottom
        if (rowBottomPosition > windowBottomPosition) {
            let rowTopPosition = rows[i].offsetTop;
            let offset = window.innerHeight - rows[i].offsetHeight;
            window.scrollTo(0, rowTopPosition - offset);
            return;
        }

    }

}
function scrollerUpdate(rowIndexReference) {

    // Declare DOM elements
    let rowYear = rows[rowIndexReference].querySelector(".year");
    let rowMonth = rows[rowIndexReference].querySelector(".month");

    // Update
    scrollerYear.innerText = rowYear.innerText;
    scrollerMonth.innerText = rowMonth.innerText;

}