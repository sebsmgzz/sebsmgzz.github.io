
document.write(`<div id="contactCarousel" class="carousel slide" data-ride="carousel">`);

document.write(`<div class="carousel-inner">`);
for(let i = 0; i < contactMethods.length; i++) {
    document.write(`
        <div class="carousel-item ${(i == 0)? "active" : ""}">
            <div class="carousel-caption d-md-block">
                <h5>${contactMethods[i].title}</h5>
                <p>${contactMethods[i].content}</p>
                <a href="${contactMethods[i].anchorReference}" target="_blank">
                    <img src="${contactMethods[i].imagePath}" alt="${contactMethods[i].imageText}">
                </a>
            </div>
        </div>
    `);
}
document.write(`</div>`);

document.write(`<ol class="carousel-indicators">`);
for(let i = 0; i < contactMethods.length; i++) {
    document.write(`
        <li
            data-target="#contactCarousel"
            data-slide-to="${i}"
            class="${(i == 0)? "active" : ""}">
        </li>
    `);
}
document.write(`</ol>`);
        
document.write(`
    <a class="carousel-control-prev" href="#contactCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#contactCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
`);

document.write(`</div>`);