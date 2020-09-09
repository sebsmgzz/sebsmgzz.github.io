
document.write('<div class="card-deck row row-cols-1 row-cols-md-3">');
for(let i = 0; i < certificates.length; i++) {
    document.write( `
    <div class="col my-2">
        <div class="card">
            <img src="${certificates[i].logoPath}" alt="${certificates[i].logoText}">
            <div class="card-body">
                <h5 class="card-title">${certificates[i].name}</h5>
                <a href="${certificates[i].credentialPath}" target="_blank" class="card-link">
                    View credential
                </a>
                <p class="card-text">Issueres:
                    ${mergeItemsAs( certificates[i].issuers, (issuer) => `
                        <a href="${issuer.referencePath}" target="_blank">
                            ${issuer.name}
                        </a>
                    `)}
                </p>
            </div>
        </div>
    </div>
    `);
}
document.write(`</div>`);