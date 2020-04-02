
// DOM elements
const columns = document.querySelectorAll(".column");
const contents = document.querySelectorAll(".contents");

// Event listeners
columns.forEach( (column) => column.addEventListener("click",columnClicked));

// Event functions
function columnClicked() {
    this.classList.toggle("fullsize")
    for(let i = 0; i < columns.length; i++) {
        if (columns[i] != this) {
            columns[i].classList.toggle("hidden");
        } else {
            contents[i].classList.toggle("show")
        }
    }
}

