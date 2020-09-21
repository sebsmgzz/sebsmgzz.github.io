"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EducationController_1 = __importDefault(require("../Controllers/EducationController"));
/** @class Represents the education view. */
var EducationView = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function EducationView() {
        /** @field The root element of the view. */
        this.root = (hyperscript("div", { class: "card-deck row row-cols-1 row-cols-md-3" }));
        this.controller = new EducationController_1.default();
        for (var i = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            var scopedIssuers = EducationView.defaultIssuersRoot;
            for (var j = 0; j < this.controller.issuersCount; j++) {
                scopedIssuers.appendChild(this.getScopedIssuer(j));
            }
            this.root.appendChild(scopedIssuers);
        }
    }
    //#endregion
    //#region Methods
    /**
     * Setups the card element of the deck
     * @param issuersElement {HTMLElement} The issuers element to add to the card.
     * @return {HTMLElement} THe element containing the skill.
     */
    EducationView.prototype.getScopedCard = function (issuersElement) {
        return (hyperscript("div", { class: "col my-2" },
            hyperscript("div", { class: "card" },
                hyperscript("img", { src: this.controller.logoPath, alt: this.controller.logoText }),
                hyperscript("div", { class: "card-body" },
                    hyperscript("h5", { class: "card-title" }, this.controller.credentialName),
                    hyperscript("a", { href: this.controller.credentialPath, target: "_blank", class: "card-link" }, "View credential"),
                    issuersElement))));
    };
    /**
     * Setupds the issuers on scope.
     * @param index The index of the issuer to add.
     * @return {HTMLElement} THe element containing the issuer.
     */
    EducationView.prototype.getScopedIssuer = function (index) {
        return (hyperscript("a", { href: this.controller.getIssuerReference(index), target: "_blank" }, this.controller.getIssuerName(index)));
    };
    //#endregion
    //#region IView
    EducationView.prototype.render = function (element) {
        element.appendChild(this.root);
    };
    //#region Static Fields
    /** @field The default root element for the issuers. */
    EducationView.defaultIssuersRoot = (hyperscript("p", { class: "card-text" }, "Issueres: "));
    return EducationView;
}());
exports.default = EducationView;
