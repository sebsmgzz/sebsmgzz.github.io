
// DOM elements
const scrollerUp = document.querySelector("#scroller button:first-child");
const scrollerDown = document.querySelector("#scroller button:last-child");
const scrollerYear = document.querySelector("#scroller h1");
const scrollerMonth = document.querySelector("#scroller h3");
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
        let rowYear = rows[i].querySelector("h2");
        let rowMonth = rows[i].querySelector("h4");

        // Define row attributes
        let rowTopPosition = rows[i].offsetTop;
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;

        // Row is in visible area
        if (thresholdBottom > rowTopPosition) {
            rowLeftContent.classList.remove("hidden");
            rowRightContent.classList.remove("hidden");
            rowImage.classList.remove("hidden");
            rowLeftContent.classList.add("visible");
            rowRightContent.classList.add("visible");
            rowImage.classList.add("visible");
            scrollerYear.innerText = rowYear.innerText;
            scrollerMonth.innerText = rowMonth.innerText;
        }

        // Row is above or below visible area
        if (rowTopPosition > thresholdBottom || rowBottomPosition < thresholdTop ) {
            rowLeftContent.classList.remove("visible");
            rowRightContent.classList.remove("visible");
            rowImage.classList.remove("visible");
            rowLeftContent.classList.add("hidden");
            rowRightContent.classList.add("hidden");
            rowImage.classList.add("hidden");
        }

    }

}
function scrollerUpClick() {
    let windowTopPosition = window.scrollY;
    for (let i = rows.length - 1; i >= 0; i-- ) {
        let rowTopPosition = rows[i].offsetTop;
        if (windowTopPosition > rowTopPosition) {
            window.scrollTo(0,rowTopPosition);
            return;
        }
    }
}
function scrollerDownClick() {
    let windowBottomPosition = window.scrollY + window.innerHeight;
    for (let i = 0; i < rows.length; i++ ) {
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;
        if (rowBottomPosition > windowBottomPosition) {
            let rowTopPosition = rows[i].offsetTop;
            let offset = window.innerHeight - rows[i].offsetHeight;
            window.scrollTo(0,rowTopPosition-offset);
            return;
        }
    }
}