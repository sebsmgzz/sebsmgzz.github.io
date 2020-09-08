/* 
    <summary>
        Constructs the DOM node for the profile content, from the 'profile' variable in data/profile.js
    </summary>
*/

// jumbotron
let jumbotron = document.createElement("div");
jumbotron.classList = "row jumbotron jumbotron-fluid";
document.querySelector("#profile").appendChild(jumbotron);
// left column
let leftCol = document.createElement("div");
leftCol.classList = "col-sm";
jumbotron.appendChild(leftCol);
// image
let image = document.createElement("img");
image.src = profile.imagePath;
image.alt = profile.imageText;
image.classList = "d-block mx-auto";
leftCol.appendChild(image);
// right column
let rightCol = document.createElement("div");
rightCol.classList = "col-md title-text";
jumbotron.appendChild(rightCol);
// name
let name = document.createElement("h1");
name.classList = "display-4";
name.innerText = profile.name;
rightCol.appendChild(name);
// titles
for(let i = 0; i < profile.titles.length; i++) {
    let title = document.createElement("p");
    title.classList = "lead";
    title.innerText = profile.titles[i];
    rightCol.appendChild(title);
}