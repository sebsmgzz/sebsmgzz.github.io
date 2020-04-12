
// Contents
const COLUMN_TITLES = [
    "Why hire me?",
    "Unique aptitudes",
    "Network",
    "Contact"
]
const LINKS_HREFS = [
    [
        "../why-hire-me/why-hire-me.html#value",
        "../why-hire-me/why-hire-me.html#experience",
        "../why-hire-me/why-hire-me.html#time"
    ],
    [
        "#",
        "#",
        "#"
    ],
    [
        "https://www.linkedin.com/in/sebastian-mgzz/",
        "http://github.com/sebsmgzz",
        "../globals/documents/CV_English.pdf"
    ],
    [
        "mailto: sebastian.mgzz@outlook.com",
        "https://wa.me/5218262615753/?text=Hola%20Sebasti%C3%A1n,%20te%20contacto%20desde%20tu%20portafolio%20y%20me%20gustaria%20ponerme%20en%20contacto%20contigo",
        "https://goo.gl/maps/YS5nEty3iU1VmN5V6"
    ]
]
const LINKS_SRCS = [
    [
        "../globals/footer/imgs/value.png",
        "../globals/footer/imgs/experience.png",
        "../globals/footer/imgs/time.png"
    ],
    [
        "../globals/footer/imgs/design.png",
        "../globals/footer/imgs/finance.png",
        "../globals/footer/imgs/medical.png"
    ],
    [
        "../globals/footer/imgs/linkedin.png",
        "../globals/footer/imgs/github.png",
        "../globals/footer/imgs/pdf.png"
    ],
    [
        "../globals/footer/imgs/mail.png",
        "../globals/footer/imgs/phone.png",
        "../globals/footer/imgs/home.png"
    ]
]
const LINKS_CONTENTS = [
    [
        "How can I apport value?",
        "Do I have enough experience?",
        "How to manage several activities?"
    ],
    [
        "Designer",
        "Financial",
        "Medical"
    ],
    [
        "LinkedIn",
        "GitHub",
        "Download my CV"
    ],
    [
        "sebastian.mgzz@outlook.com",
        "+52 1 826 261 5753",
        "Monterrey, Nuevo León, MX"
    ]
]

// DOM elements
const footer = document.querySelector("#footer");

// Constructor
window.addEventListener("load",footerConstructor);
function footerConstructor() {

    // Define elements
    let footerTop = TopFooter();
    let footerBottom = BottomFooter();

    // Group
    footer.appendChild(footerTop);
    footer.appendChild(footerBottom);

}

// Top footer
function TopFooter() {
    let topFooter = document.createElement("div");
    topFooter.classList.add("footer-top");

    // Define and append each cell/col
    for(let i = 0; i < COLUMN_TITLES.length; i++) {
        let footerCell = FooterCell(i);
        topFooter.appendChild(footerCell);
    }
    return topFooter;

}

function FooterCell(cellIndex) {
    let element = document.createElement("div");
    element.classList.add("footer-cell");

    // Title
    let columnTitle = document.createElement("h6");
    columnTitle.innerText = COLUMN_TITLES[cellIndex];

    // List
    let unorderedList = List(cellIndex);

    // Append
    element.appendChild(columnTitle);
    element.appendChild(unorderedList);
    return element;
    
}

function List(columnIndex) {
    let element = document.createElement("ul");
    element.classList.add("footer-crumbs");

    // Define and append each list item
    for(let i = 0; i < LINKS_HREFS[columnIndex].length; i++) {

        let listItem = ListItem(columnIndex,i);
        element.appendChild(listItem); 

    }
    return element;

}

function ListItem(columnIndex,rowIndex) {
    let element = document.createElement("li");

    // Define elements
    let anchore = document.createElement("a");
    let image = document.createElement("img");
    let anchoreInnerText = LINKS_CONTENTS[columnIndex][rowIndex];

    // Define atributes
    anchore.href = LINKS_HREFS[columnIndex][rowIndex];
    image.classList.add("footer-icon");
    image.src = LINKS_SRCS[columnIndex][rowIndex];

    // Append
    if(columnIndex != 0) {
        anchore.appendChild(image);
    }
    anchore.insertAdjacentText("beforeend",anchoreInnerText);
    element.appendChild(anchore);
    return element;

}

// Bottom footer
function BottomFooter() {

}