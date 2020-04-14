
// Contents
const INDEX_HREF = "../index.html";
const HOME_SRC = "../globals/navbar/imgs/home.png";
const MENU_SRC = "../globals/navbar/imgs/menu.png";
const PAGES_HREFS = [ 
    "../timeline/timeline.html",
    "../career/career.html",
    "../projects/projects.html",
    "../myself/myself.html",
    "../why-hire-me/why-hire-me.html",
    "../contact/contact.html"
]
const PAGES_CONTENTS = [
    "Timeline",
    "Career",
    "Projects",
    "Myself",
    "Why hire me?",
    "Contact"
]

// Constructor
const navbar = document.querySelector("#navbar");
navbarConstructor();
function navbarConstructor() {

    // Define elements
    let leftNavbar = LeftNavbar();
    let rightNavbar = RightNavbar();

    // Group
    navbar.appendChild(leftNavbar);
    navbar.appendChild(rightNavbar);

}

// Left Side constructors
function LeftNavbar() {
    let element =  document.createElement("div");
    element.classList.add("navbar-left");

    // Define elements
    let anchore = Anchore();
    let button = Button();

    // Append
    element.appendChild(anchore);
    element.appendChild(button);
    return element;

}
function Anchore() {
    let element = document.createElement("a");
    element.href = INDEX_HREF;

    // Image
    let image = document.createElement("img");
    image.classList.add("navbar-icon");
    image.src = HOME_SRC;

    // Group and return
    element.appendChild(image);
    return element;

}
function Button() {
    let element = document.createElement("button");
    element.type = "button";

    // Image
    let image = document.createElement("img");
    image.classList.add("navbar-icon");
    image.src = MENU_SRC;

    // Append
    element.appendChild(image);
    return element;

}

// Right Side Constructors
function RightNavbar() {
    let element = document.createElement("div");
    element.classList.add("navbar-right");
    element.classList.add("navbar-collapsed");
    
    // Define and append each list item
    for(let i = 0; i < PAGES_HREFS.length; i++) {
        let listAnchore = ListAnchore(i);
        element.appendChild(listAnchore);
    }
    return element;
    
}
function ListAnchore(index) {
    let element = document.createElement("a");
    element.classList.add("navbar-crumb");
    element.href = PAGES_HREFS[index];

    // Content
    let content = document.createElement("p");
    content.innerText = PAGES_CONTENTS[index];

    // Append
    element.appendChild(content);
    return element;

}