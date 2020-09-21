"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CareerController_1 = __importDefault(require("../Controllers/CareerController"));
var Utilities_1 = __importDefault(require("../public/Utilities"));
/** @class Represents the career view. */
var CareerView = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function CareerView() {
        //#endregion
        //#region Instance fields
        /** @field Controls interactions between the view and the corresponding models. */
        this.controller = new CareerController_1.default();
        /** The root element of the view. */
        this.root = (hyperscript("div", { id: CareerView.defaultAccordionId + CareerView.spansCount, class: "accordion" }));
        CareerView.spansCount += 1;
        for (var i = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            var card = this.getScopedAccordionCard(i);
            this.root.append(card);
        }
    }
    //#endregion
    //#region Private methods
    /**
     * Formats a date to be visible attractive.
     * @param date The date to give format.
     */
    CareerView.formatDate = function (date) {
        return Utilities_1.default.getMonthName(date.getMonth()) + " " + date.getFullYear();
    };
    /**
     * Setups the element of an accordion card.
     * @param i {number} The index of the card being added.
     * @return {HTMLElement} The element representing the accordion card.
     */
    CareerView.prototype.getScopedAccordionCard = function (i) {
        return (hyperscript("div", { class: "card" },
            hyperscript("div", { id: CareerView.defaultCardHeaderId + i, class: "card-header" },
                hyperscript("h2", { class: "mb-0" }),
                hyperscript("a", { target: "_blank", class: "col-fluid", href: this.controller.organizationPath },
                    hyperscript("img", { class: "d-block mx-auto", alt: this.controller.imageText, src: this.controller.imagePath })),
                hyperscript("a", { class: "col btn btn-link btn-block", type: "button", "data-toggle": "collapse", "data-target": '#' + CareerView.defaultCardBodyId + i, "aria-expanded": "true", "aria-controls": CareerView.defaultCardBodyId + i },
                    hyperscript("h5", { class: "card-title" }, this.controller.position),
                    hyperscript("h6", { class: "card-subtitle mb-2 text-muted" }, this.controller.organizationName),
                    hyperscript("small", { class: "text-muted" },
                        CareerView.formatDate(this.controller.startingDate),
                        " -",
                        CareerView.formatDate(this.controller.endingDate)))),
            hyperscript("div", { id: CareerView.defaultCardBodyId + i, class: "collapse", "aria-labelledby": "#", "data-parent": "#" + this.root.id },
                hyperscript("div", { class: "card-body" }, this.controller.description))));
    };
    //#endregion
    //#region IView
    CareerView.prototype.render = function (element) {
        element.appendChild(this.root);
    };
    //#region Static fields
    /** @field The number of CareerViews spanned, used to achieve different ids. */
    CareerView.spansCount = 0;
    /** @field The default id of the accordion. */
    CareerView.defaultAccordionId = "careerAccordion";
    /** @field The default id of the card header id. */
    CareerView.defaultCardHeaderId = "careerAccordionCardHeader";
    /** @field The default id of the card body id. */
    CareerView.defaultCardBodyId = "careerAccordionCardBody";
    return CareerView;
}());
exports.default = CareerView;
