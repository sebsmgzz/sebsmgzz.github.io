
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

// DOM elements
const navbar = document.querySelector("#navbar");

// Constructor
window.addEventListener("load",navbarBuild);
function navbarBuild() {

    // Define elements
    let navbarLeft = LeftSide();
    let navbarRight = RightSide();

    // Group
    navbar.appendChild(navbarLeft);
    navbar.appendChild(navbarRight);

}

// Left Side
function LeftSide() {

    // Define elements
    let navbarLeft =  document.createElement("div");
    let homeAnchore = IndexReference();
    let menuButton = ResponsiveMenu();

    // Define atributes
    navbarLeft.classList.add("navbar-left");
    
    // Group and return
    navbarLeft.appendChild(homeAnchore);
    navbarLeft.appendChild(menuButton);
    return navbarLeft;

}
function IndexReference() {

    // Define elements
    let homeAnchore = document.createElement("a");
    let homeImg = document.createElement("img");

    // Define atributes
    homeAnchore.href = INDEX_HREF;
    homeImg.classList.add("navbar-icon");
    homeImg.src = HOME_SRC;

    // Group and return
    homeAnchore.appendChild(homeImg);
    return homeAnchore;

}
function ResponsiveMenu() {

    // Define elements
    let menuButton = document.createElement("button");
    let menuImage = document.createElement("img");

    // Define atributes
    menuButton.type = "button";
    menuImage.classList.add("navbar-icon");
    menuImage.src = MENU_SRC;

    // Group and return
    menuButton.appendChild(menuImage);
    return menuButton;

}

// RightSide
function RightSide() {

    // Define elements
    let navbarRight = document.createElement("div");
    let pagesAnchores = PagesReferences();

    // Define atributes
    navbarRight.classList.add("navbar-right");
    navbarRight.classList.add("navbar-collapsed");

    // Group and return
    pagesAnchores.forEach(page => {
        navbarRight.appendChild(page);
    });
    return navbarRight;
    
}
function PagesReferences() {

    let references = [];
    for(let i = 0; i < PAGES_HREFS.length; i++) {

        // Define elements
        let refAnchore = document.createElement("a");
        let refContent = document.createElement("p");

        // Define atributes
        refAnchore.classList.add("navbar-crumb");
        refAnchore.href = PAGES_HREFS[i];
        refContent.innerText = PAGES_CONTENTS[i];

        // Group
        refAnchore.appendChild(refContent);
        references.push(refAnchore);

    }
    return references;

}