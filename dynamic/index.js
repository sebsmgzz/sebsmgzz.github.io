
const scrollerUp = document.querySelector("#scroller button:first-child");
const scrollerDown = document.querySelector("#scroller button:last-child");
const scrollerYear = document.querySelector("#scroller h1");
const scrollerMonth = document.querySelector("#scroller h3");
const rows = document.querySelectorAll("#main > div:not(:last-child)")

window.onscroll = function (e) {  
    let thresholdPosition = window.scrollY + window.innerHeight - 300;

    scrollerYear.innerText = window.scrollY;
    scrollerMonth.innerText = window.scrollY + window.innerHeight;

    for (let i = 1; i < rows.length; i++ ) {
        let rowTopPosition = rows[i].offsetTop;
        if (thresholdPosition > rowTopPosition) {
            rows[i].classList.remove("hiddenRow");
            rows[i].classList.add("visibleRow");
        }
        if (rowTopPosition > thresholdPosition) {
            rows[i].classList.remove("visibleRow");
            rows[i].classList.add("hiddenRow");
        }
    }
}

scrollerUp.addEventListener( "click", (e) => {
    alert("beep");
    let windowBottomPosition = window.scrollY + window.innerHeight
    for (let i = 0; i < rows.length; i++ ) {
        let rowBottomPosition = rows[i].offsetTop + rows[i].offsetHeight;
        if (windowBottomPosition > rowBottomPosition) {
            
        }
    }
});

scrollerDown.addEventListener( "click", (e) => {
    let windowBottomPosition = window.scrollY + window.innerHeight
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
