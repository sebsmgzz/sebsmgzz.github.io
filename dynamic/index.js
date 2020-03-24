
const scrollerUp = document.querySelector("#scroller button:first-child");
const scrollerDown = document.querySelector("#scroller button:last-child");
const scrollerYear = document.querySelector("#scroller h1");
const scrollerMonth = document.querySelector("#scroller h3");
const rows = document.querySelectorAll("#main > div:not(:last-child)")

window.onscroll = function (e) {  
    let thresholdBottom = window.scrollY + window.innerHeight;
    let thresholdTop = window.scrollY;
    for (let i = 1; i < rows.length; i++ ) {
        let rowTopPosition = rows[i].offsetTop;
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;
        if (thresholdBottom > rowTopPosition) {
            rows[i].classList.remove("hiddenRow");
            rows[i].classList.add("visibleRow");
        }
        if (rowTopPosition > thresholdBottom || rowBottomPosition < thresholdTop ) {
            rows[i].classList.remove("visibleRow");
            rows[i].classList.add("hiddenRow");
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
