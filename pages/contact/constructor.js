/* 
    <summary>
        Constructs the DOM element for the contact content, from the 'contacts' variable in data/contacts.js
    </summary>
*/

// carousel
let carousel = document.createElement("div");
carousel.id = "contactCarousel";
carousel.classList = "carousel slide";
carousel.setAttribute("data-ride","carousel");
document.querySelector("#contact").appendChild(carousel);
// carousel inner
let carouselInner = document.createElement("div");
carouselInner.classList = "carousel-inner";
carousel.appendChild(carouselInner);
// carousel indicators
let carouselIndicators = document.createElement("ol");
carouselIndicators.classList = "carousel-indicators";
carousel.appendChild(carouselIndicators);
// carousel prev control
let prevControl = document.createElement("a");
prevControl.classList = "carousel-control-prev";
prevControl.href = `#${carousel.id}`;
prevControl.setAttribute("role", "button");
prevControl.setAttribute("data-slide", "prev");
carousel.appendChild(prevControl);
let prevControlSpan = document.createElement("span");
prevControlSpan.classList = "carousel-control-prev-icon";
prevControlSpan.setAttribute("aria-hidden", "true");
prevControl.appendChild(prevControlSpan);
let prevControlText = document.createElement("span");
prevControlText.classList = "sr-only";
prevControlText.innerText = "Previous";
prevControl.appendChild(prevControlText);
// carousel next control
let nextControl = document.createElement("a");
nextControl.classList = "carousel-control-next";
nextControl.href = `#${carousel.id}`;
nextControl.setAttribute("role", "button");
nextControl.setAttribute("data-slide", "next");
carousel.appendChild(nextControl);
let nextControlSpan = document.createElement("span");
nextControlSpan.classList = "carousel-control-next-icon";
nextControlSpan.setAttribute("aria-hidden", "true");
nextControl.appendChild(nextControlSpan);
let nextControlText = document.createElement("span");
nextControlText.classList = "sr-only";
nextControlText.innerText = "Next";
nextControl.appendChild(nextControlText);
//  items
for (let i = 0; i < contacts.length; i++) {
    // carousel item
    let item = document.createElement("div");
    item.classList = "carousel-item";
    if(i == 0) {
        item.classList.add("active");
    }
    carouselInner.appendChild(item);
    // item caption
    let itemCaption = document.createElement("div");
    itemCaption.classList = "carousel-caption d-md-block";
    item.appendChild(itemCaption);
    // title
    let title = document.createElement("h5");
    title.innerText = contacts[i].methodName;
    itemCaption.appendChild(title);
    // content
    let content = document.createElement("p");
    content.innerText = contacts[i].content;
    itemCaption.appendChild(content);
    // anchor
    let anchor = document.createElement("a");
    anchor.href = contacts[i].reference;
    anchor.target = "_blank";
    itemCaption.appendChild(anchor);
    // image
    let image = document.createElement("img");
    image.src = contacts[i].imagePath;
    image.alt = contacts[i].imageText;
    anchor.appendChild(image);
    // indicator
    let indicator = document.createElement("li");
    indicator.setAttribute("data-target",`#${carousel.id}`);
    indicator.setAttribute("data-slide-to",`${i}`);
    indicator.classList = "active";
    carouselIndicators.appendChild(indicator);
}