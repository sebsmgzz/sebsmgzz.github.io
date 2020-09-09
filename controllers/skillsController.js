
document.write(`<ul class="list-group">`);
for(let i =0; i < skills.length; i++) {
    document.write(`
        <li class="list-group-item">
            <img src="${skills[i].imagePath}" alt="${skills[i].imageText}">
            <span class="align-middle">${skills[i].name}</span>
        </li>
    `);
}
document.write(`</ul>`);