
document.write(`<div class="accordion" id="careerAccordion">`);
for(let i = 0; i < experiences.length; i++) {
    document.write(`
        <div class="card">
            <div class="card-header" id="careerAccordionHeader${i}">
                <h2 class="mb-0"></h2>
                <a target="_blank" class="col-fluid" href="${experiences[i].companyPath}">
                    <img
                        class="d-block mx-auto" 
                        alt="${experiences[i].logoText}"
                        src="${experiences[i].logoPath}" />
                </a>
                <a 
                    class="col btn btn-link btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#careerAccordionCardBody${i}"
                    aria-expanded="true"
                    aria-controls="careerAccordionCardBody${i}">
                    <h5 class="card-title">${experiences[i].position}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${experiences[i].company}</h6>
                    <small class="text-muted">${experiences[i].dates}</small>
                </a>
            </div>
            <div
                id="careerAccordionCardBody${i}"
                class="collapse"
                aria-labelledby="#"
                data-parent="#careerAccordion">
                <div class="card-body">${experiences[i].description}</div>
            </div>
        </div>
    `);
}
document.write(`</div>`);