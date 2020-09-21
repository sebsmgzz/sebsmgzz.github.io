"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactController_1 = __importDefault(require("../Controllers/ContactController"));
/** @class Represents the contact view. */
var ContactView = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function ContactView() {
        //#endregion
        //#region Instance fields
        this.controller = new ContactController_1.default();
        this.root = (hyperscript("div", { id: ContactView.defaultCarouselId + ContactView.spansCount, class: "carousel slide", "data-ride": "carousel" }));
        this.items = (hyperscript("div", { class: "carousel-inner" }));
        this.indicators = (hyperscript("ol", { class: "carousel-indicators" }));
        ContactView.spansCount += 1;
        for (var i = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            this.items.appendChild(this.getScopedItem(i == 0));
            this.indicators.appendChild(this.getScopedIndicator(i == 0, i));
        }
        this.root.appendChild(this.root);
        this.root.appendChild(this.indicators);
        this.root.appendChild(ContactView.previousControl);
        this.root.appendChild(ContactView.nextControl);
    }
    Object.defineProperty(ContactView, "previousControl", {
        get: function () {
            return (hyperscript("a", { class: "carousel-control-prev", href: "#contactCarousel", role: "button", "data-slide": "prev" },
                hyperscript("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }),
                hyperscript("span", { class: "sr-only" }, "Previous")));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactView, "nextControl", {
        get: function () {
            return (hyperscript("a", { class: "carousel-control-next", href: "#contactCarousel", role: "button", "data-slide": "next" },
                hyperscript("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }),
                hyperscript("span", { class: "sr-only" }, "Next")));
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region Private methods
    ContactView.prototype.getScopedItem = function (active) {
        return (hyperscript("div", { class: "carousel-item" + (active ? "active" : "") },
            hyperscript("div", { class: "carousel-caption d-md-block" },
                hyperscript("h5", null, this.controller.title),
                hyperscript("p", null, this.controller.content),
                hyperscript("a", { href: this.controller.reference, target: "_blank" },
                    hyperscript("img", { src: this.controller.imagePath, alt: this.controller.imageText })))));
    };
    ContactView.prototype.getScopedIndicator = function (active, slideToIndex) {
        return (hyperscript("li", { "data-target": "#" + this.root.id, "data-slide-to": slideToIndex, class: (active) ? "active" : "" }));
    };
    //#endregion
    //#region IView
    ContactView.prototype.render = function (element) {
        element.appendChild(this.root);
    };
    //#region Static fields
    ContactView.spansCount = 0;
    ContactView.defaultCarouselId = "contactCarousel";
    return ContactView;
}());
exports.default = ContactView;
