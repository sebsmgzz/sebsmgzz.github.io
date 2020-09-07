/* 
    <summary>
        Builds the DOM element for the career content, from the 'careerData' variable.
    </summary>
    <returns>A DOM element representing the career node</returns>
*/
function getCareer() {
    // accordion
    let accordion = document.createElement("div");
    accordion.classList = "accordion";
    accordion.id = "careerAccordion";
    // cards
    for(let i = 0; i < careerData.length; i++) {
        // card
        let card = document.createElement("div");
        card.classList.add("card");
        accordion.appendChild(card);
        // header
        let cardHeader = document.createElement("div");
        cardHeader.classList = "card-header";
        cardHeader.id = `careerAccordionHeader${i}`;
        card.appendChild(cardHeader);
        // header margin
        let cardHeaderMargin = document.createElement("h2");
        cardHeaderMargin.classList = "mb-0";
        cardHeader.appendChild(cardHeaderMargin);
        // button
        let cardButton = document.createElement("button");
        cardButton.classList = "btn btn-link btn-block text-left";
        cardButton.type = "button";
        cardButton.setAttribute("data-toggle", "collapse");
        cardButton.setAttribute("data-target", `#careerAccordionCardBody${i}`);
        cardButton.setAttribute("aria-expanded", "true");
        cardButton.setAttribute("aria-controls", `careerAccordionCardBody${i}`);
        cardHeader.appendChild(cardButton);
        // title
        let title = document.createElement("h5");
        title.classList = "card-title";
        title.innerText = careerData[i].position;
        cardButton.appendChild(title);
        // subtitle anchor
        let anchor = document.createElement("a");
        anchor.href = careerData[i].companyPath;
        anchor.target = "_blank";
        cardHeader.appendChild(anchor);
        // subtitle
        let subtitle = document.createElement("h6");
        subtitle.classList = "card-subtitle mb-2 text-muted";
        subtitle.innerText = careerData[i].company;
        anchor.appendChild(subtitle);
        // detail
        let detail = document.createElement("small");
        detail.classList = "text-muted";
        detail.innerText = careerData[i].dates;
        cardHeader.appendChild(detail);
        // body
        let cardBody = document.createElement("div");
        cardBody.id = `careerAccordionCardBody${i}`;
        cardBody.classList = "collapse";
        cardBody.setAttribute("aria-labelledby", `#${card.id}`);
        cardBody.setAttribute("data-parent", `#${accordion.id}`);
        card.appendChild(cardBody);
        // content
        let cardBodyContent = document.createElement("div");
        cardBodyContent.classList = "card-body";
        cardBodyContent.innerText = careerData[i].description;
        cardBody.appendChild(cardBodyContent);
    }
    return accordion;
}