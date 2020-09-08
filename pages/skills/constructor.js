/* 
    <summary>
        Constructs the DOM element for the skills content, from the 'skills' variable in data/skills.js
    </summary>
*/

// list group
let listGroup = document.createElement("ul");
listGroup.classList = "list-group";
document.querySelector("#skills").appendChild(listGroup);
// items
for(let i = 0; i < skills.length; i++) {
    // item
    let item = document.createElement("li");
    item.classList = "list-group-item";
    listGroup.appendChild(item);
    // image
    let image = document.createElement("img");
    image.src = skills[i].imagePath;
    image.alt = skills[i].imageText;
    item.appendChild(image);
    // name
    let name = document.createElement("span");
    name.classList = "align-middle";
    name.innerText = skills[i].name;
    item.appendChild(name);
}