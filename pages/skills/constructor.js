/* 
    <summary>
        Constructs the DOM element for the skills content, from the 'skillsData' variable.
    </summary>
*/

// list group
let listGroup = document.createElement("ul");
listGroup.classList = "list-group";
document.querySelector("#skills").appendChild(listGroup);
// items
for(let i = 0; i < skillsData.length; i++) {
    // item
    let item = document.createElement("li");
    item.classList = "list-group-item";
    listGroup.appendChild(item);
    // image
    let image = document.createElement("img");
    image.src = skillsData[i].imagePath;
    image.alt = skillsData[i].imageText;
    item.appendChild(image);
    // name
    let name = document.createElement("span");
    name.classList = "align-middle";
    name.innerText = skillsData[i].name;
    item.appendChild(name);
}