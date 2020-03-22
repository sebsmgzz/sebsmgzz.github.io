
const Nav = document.querySelector("body nav");
const NavButton = document.querySelector("body nav div button");
const NavRight = document.querySelector(".NavRight");

NavButton.addEventListener("click", (e) => {
    NavRight.className = (NavRight.className === "NavRight collapsed") ? "NavRight uncollapsed" : "NavRight collapsed";
});