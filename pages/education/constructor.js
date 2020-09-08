/* 
    <summary>
        Constructs the DOM element for the education content, from the 'certificates' variable in data/certificates.js
    </summary>
*/

let deck = document.createElement("div");
deck.classList = "card-deck row row-cols-1 row-cols-md-3";
document.querySelector("#education").appendChild(deck);
for(let i = 0; i < certificates.length; i++) {
    // column
    let col = document.createElement("div");
    col.classList = "col my-2";
    deck.appendChild(col);
    // card
    let card = document.createElement("div");
    card.classList = "card";
    col.appendChild(card);
    // image
    let image = document.createElement("img");
    image.src = certificates[i].logoPath;
    image.alt = certificates[i].logoText;
    card.appendChild(image);
    // card body
    let cardBody = document.createElement("div");
    cardBody.classList = "card-body";
    card.appendChild(cardBody);
    // title
    let cardTitle = document.createElement("h5");
    cardTitle.innerText = certificates[i].name;
    cardTitle.classList = "card-title";
    cardBody.appendChild(cardTitle);
    // subtitle
    let cardSubtitle = document.createElement("div");
    cardSubtitle.classList = "card-subtitle mb-2 text-muted";
    cardSubtitle.innerText = certificates[i].dateIssued;
    cardBody.appendChild(cardTitle);
    // anchor
    let cardAnchor = document.createElement("a");
    cardAnchor.href = certificates[i].credentialPath;
    cardAnchor.target = "_blank";
    cardAnchor.innerText = "View credential";
    cardAnchor.classList = "card-link";
    cardBody.appendChild(cardAnchor);
    // issuers
    let issuers = document.createElement("p");
    issuers.classList = "card-text";
    issuers.innerText = "Issueres:";
    cardBody.appendChild(issuers);
    // issuers anchor
    for(let j = 0; j < certificates[i].issuers.length; j++) {
        let issuer = document.createElement("a");
        issuer.href = certificates[i].issuers[j].referencePath;
        issuer.innerText = certificates[i].issuers[j].name;
        issuer.target = "_blank";
        issuers.appendChild(issuer);
    }
}