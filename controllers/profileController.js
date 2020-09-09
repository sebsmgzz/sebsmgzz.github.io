
function mergeItemsAs(list, method) {
    let answer = "";
    for(let i = 0; i < list.length; i++) {
        answer += method(list[i]);
    }
    return answer;
}

document.write(`
    <div class="row jumbotron jumbotron-fluid">
        <div class="col-sm">
            <img src="${profile.imagePath}" alt="${profile.imageText}" class="d-block mx-auto">
        </div>
        <div class="col-md title-text">
            <h1 class="display-4">${profile.name}</h1>
            ${mergeItemsAs( profile.titles, (title) =>
                `<p class="lead">${title}</p>`
            )}
        </div>
    </div>
`);