/* 
    <summary>
        Builds the DOM element for the profile content, from the 'profileData' variable.
    </summary>
    <returns>A DOM element representing the profile node</returns>
*/
function getProfile() {
    // jumbotron
    let jumbotron = document.createElement("div");
    jumbotron.classList = "row jumbotron jumbotron-fluid";
    // left column
    let leftCol = document.createElement("div");
    leftCol.classList = "col-sm";
    jumbotron.appendChild(leftCol);
    // image
    let image = document.createElement("img");
    image.src = profileData.imagePath;
    image.alt = profileData.imageText;
    image.classList = "d-block mx-auto";
    leftCol.appendChild(image);
    // right column
    let rightCol = document.createElement("div");
    rightCol.classList = "col-md title-text";
    jumbotron.appendChild(rightCol);
    // name
    let name = document.createElement("h1");
    name.classList = "display-4";
    name.innerText = profileData.name;
    rightCol.appendChild(name);
    // titles
    for(let i = 0; i < profileData.titles.length; i++) {
        let title = document.createElement("p");
        title.classList = "lead";
        title.innerText = profileData.titles[i];
        rightCol.appendChild(title);
    }
    return jumbotron;
}

