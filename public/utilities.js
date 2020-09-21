
function mergeItemsAs(list, method) {
    let answer = "";
    for(let i = 0; i < list.length; i++) {
        answer += method(list[i]);
    }
    return answer;
}

function setCurrentPage(index) {
    pages = document.querySelectorAll("main > div");
    for(let i = 0; i < pages.length; i++) {
        pages[i].classList.add("hidden-content");
        if(i == index) {
            pages[i].classList.remove("hidden-content");
        }
    }
    $(".navbar-collapse").collapse('hide');
}