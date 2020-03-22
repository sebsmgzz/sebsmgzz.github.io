
const Nav = document.querySelector("body nav");
const NavButton = document.querySelector("body nav div button");
const NavList = document.querySelector("body nav ul");
const NavItems = document.querySelectorAll("body nav ul li");

NavButton.addEventListener("click", (e) => {
    NavList.className = (NavList.className === "collapsed") ? "uncollapsed" : "collapsed";
});