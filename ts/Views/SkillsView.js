"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SkillsController_1 = __importDefault(require("../Controllers/SkillsController"));
/** @class Represents the skills view. */
var SkillsView = /** @class */ (function () {
    //#endregion
    //#region Contructor
    function SkillsView() {
        /** @field {HTMLElement} -  The root element of the view. */
        this.root = (hyperscript("ul", { class: "list-group" }));
        this.controller = new SkillsController_1.default();
        for (var i = 0; i < this.controller.count; i++) {
            this.root.appendChild(this.getScopedSkill());
        }
    }
    //#endregion
    //#region Methods
    /** Setups the scoped skill element
     * @returns {HTMLElement} The element containing skill.
     */
    SkillsView.prototype.getScopedSkill = function () {
        return (hyperscript("li", { class: "list-group-item" },
            hyperscript("img", { src: this.controller.imagePath, alt: this.controller.imageText }),
            hyperscript("span", { class: "align-middle" }, this.controller.name)));
    };
    //#endregion
    //#region IView
    /** @inheritdoc */
    SkillsView.prototype.render = function (element) {
        element.appendChild(this.root);
    };
    return SkillsView;
}());
exports.default = SkillsView;
