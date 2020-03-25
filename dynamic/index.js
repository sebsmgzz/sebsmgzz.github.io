
// DOM elements
const scrollerUp = document.querySelector("#scroller button:first-child");
const scrollerDown = document.querySelector("#scroller button:last-child");
const scrollerYear = document.querySelector("#scroller h1");
const scrollerMonth = document.querySelector("#scroller h3");
const rows = document.querySelectorAll("#main > div:not(:last-child)")

// Local variables
let scrollerRow = 1;

// Events
window.onscroll = function (e) {  
    let thresholdBottom = window.scrollY + window.innerHeight;
    let thresholdTop = window.scrollY;
    for (let i = 1; i < rows.length; i++ ) {
        let rowTopPosition = rows[i].offsetTop;
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;
        let leftContent = rows[i].children[0];
        let rightContent = rows[i].children[2];
        let image = rows[i].children[1].children[0];
        let year = rows[i].querySelector("h2");
        let month = rows[i].querySelector("h4");
        if (thresholdBottom > rowTopPosition) {
            leftContent.classList.remove("hidden");
            rightContent.classList.remove("hidden");
            image.classList.remove("hidden");
            leftContent.classList.add("visible");
            rightContent.classList.add("visible");
            image.classList.add("visible");
            scrollerYear.innerText = year.innerText;
            scrollerMonth.innerText = month.innerText;
        }
        if (rowTopPosition > thresholdBottom || rowBottomPosition < thresholdTop ) {
            leftContent.classList.remove("visible");
            rightContent.classList.remove("visible");
            image.classList.remove("visible");
            leftContent.classList.add("hidden");
            rightContent.classList.add("hidden");
            image.classList.add("hidden");
        }
    }
}

scrollerUp.addEventListener( "click", (e) => {
    let windowTopPosition = window.scrollY;
    for (let i = rows.length - 1; i >= 0; i-- ) {
        let rowTopPosition = rows[i].offsetTop;
        if (windowTopPosition > rowTopPosition) {
            window.scrollTo(0,rowTopPosition);
            return;
        }
    }
});

scrollerDown.addEventListener( "click", (e) => {
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
});

// Functions
