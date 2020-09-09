
document.write(`<div class="accordion" id="careerAccordion">`);
for(let i = 0; i < experiences.length; i++) {
    document.write(`
        <div class="card">
            <div class="card-header" id="careerAccordionHeader${i}">
                <h2 class="mb-0"></h2>
                <button 
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#careerAccordionCardBody${i}"
                    aria-expanded="true"
                    aria-controls="careerAccordionCardBody${i}">
                    <h5 class="card-title">${experiences[i].position}</h5>
                </button>
                <a href="${experiences[i].companyPath}" target="_blank">
                    <h6 class="card-subtitle mb-2 text-muted">${experiences[i].company}</h6>
                </a>
                <small class="text-muted">${experiences[i].dates}</small>
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