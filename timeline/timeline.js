
// DOM elements
const leavesContainer = document.querySelector(".leaves-container");
const scrollerUp = document.querySelector(".scroller button:first-child");
const scrollerDown = document.querySelector(".scroller button:last-child");
const scrollerYear = document.querySelector(".scroller .year");
const scrollerMonth = document.querySelector(".scroller .month");
const rows = document.querySelectorAll(".grid-row:not(.header)")

// Event listeners
window.addEventListener("load",windowLoaded)
window.addEventListener("scroll", windowScrolled);
scrollerUp.addEventListener( "click", scrollerUpClick);
scrollerDown.addEventListener( "click", scrollerDownClick);

// Event functions
function windowLoaded() {
    generateLeaves();
    rowToggleClasses(0,"hidden","visible");
    scrollerUpdate(0);
}
function windowScrolled() {

    // Define visible area
    let thresholdTop = window.scrollY; 
    let thresholdBottom = window.scrollY + window.innerHeight;

    // Iterate per row element
    for (let i = 0; i < rows.length; i++ ) {

        // Define row attributes
        let rowTopPosition = rows[i].offsetTop;
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;

        // Define locals
        let classToRemove;
        let classToAdd;

        // Row is in visible area
        if (thresholdBottom > rowTopPosition) {
            rowToggleClasses(i, "hidden", "visible");
            if (rowBottomPosition < thresholdBottom) {
                scrollerUpdate(i);
            }
        }

        // Row is above or below visible area
        if (rowTopPosition > thresholdBottom || rowBottomPosition < thresholdTop ) {
            rowToggleClasses(i, "visible", "hidden");
        }

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

// Inner functions
function generateLeaves() {
    const AMOUNT_LEAVES = 100;
    for (let i = 0; i < AMOUNT_LEAVES; i++) {
        leavesContainer.appendChild(generateLeaf());
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
function rowToggleClasses(rowIndex, classToRemove, classToAdd) {
    
    // Define row DOM elements
    let rowLeftContent = rows[rowIndex].children[0];
    let rowRightContent = rows[rowIndex].children[2];
    let rowImage = rows[rowIndex].children[1].children[0];

    // Toggle classes
    rowLeftContent.classList.remove(classToRemove);
    rowRightContent.classList.remove(classToRemove);
    rowImage.classList.remove(classToRemove);
    rowLeftContent.classList.add(classToAdd);
    rowRightContent.classList.add(classToAdd);
    rowImage.classList.add(classToAdd);

}
function generateLeaf() {
    
    // Define animation variables
    let style;
    
    // Div element
    let leafDiv = document.createElement("div");
    leafDiv.classList.add("leaf");

    // Div style
    style = leafDiv.style;
    style.position = "absolute";
    style.top = "-100px";
    style.left = `${randomInteger(0,100)}%`;
    style.animationName = "falling";
    style.animationDuration = `${randomInteger(15,20)}s`;
    style.animationDelay = `${randomInteger(0,15)}s`;
    style.animationIterationCount = "infinite";
    style.animationTimingFunction = "ease-in-out";
    style.width = "100px";

    // Image element
    let leafImg = document.createElement("img");
    leafImg.src = "imgs/leaf" + randomInteger(1,6) + ".png";

    // Image style
    style = leafImg.style;
    style.transformOrigin = "50% -100%";
    style.animationName = (randomInteger(1,100) > 50)? "spinLeft" : "spinRight";
    style.animationDuration = `${randomInteger(4,8)}s`;
    style.animationIterationCount = "infinite";
    style.animationTimingFunction = "ease-in-out"; 
    style.width = "100%";

    // Return
    leafDiv.appendChild(leafImg);
    return leafDiv;

}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}