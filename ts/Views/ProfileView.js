"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @class Represents the profile view. */
var ProfileView = /** @class */ (function () {
    function ProfileView() {
    }
    //#endregion
    //#region IView
    /** @inheritdoc */
    ProfileView.prototype.render = function (element) {
        element.appendChild(ProfileView.root);
    };
    //#region Static fields
    /** @field {HTMLElement} - The root element of the profile view. */
    ProfileView.root = (hyperscript("div", { class: "row jumbotron jumbotron-fluid" },
        hyperscript("div", { class: "col-sm" },
            hyperscript("img", { class: "d-block mx-auto", src: "TODO: this", alt: "TODO: this" })),
        hyperscript("div", { class: "col-md title-text" },
            hyperscript("h1", { class: "display-4" }, "Sebasti\u00E1n Maro\u00F1as Gonz\u00E1lez"),
            hyperscript("div", { class: "col-md title-text" },
                hyperscript("p", { class: "lead" }, "Bachelor of Engineering in Mechanic Electrics"),
                hyperscript("p", { class: "lead" }, ".NET developer")))));
    return ProfileView;
}());
exports.default = ProfileView;
