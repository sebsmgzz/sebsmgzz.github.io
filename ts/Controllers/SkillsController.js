"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SkillModel_1 = __importDefault(require("../Models/SkillModel"));
var ImageModel_1 = __importDefault(require("../Models/ImageModel"));
/** @class Controls the interactions between the skills view and models. */
var SkillsController = /** @class */ (function () {
    //#endregion
    //#region Contructor
    function SkillsController() {
        this.skill = new SkillModel_1.default();
        this.image = new ImageModel_1.default();
    }
    Object.defineProperty(SkillsController.prototype, "imagePath", {
        //#endregion
        //#region Properties
        /** @property {string} - The path to the image of the scoped skill. */
        get: function () {
            return this.image.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SkillsController.prototype, "imageText", {
        /** @property {string} - The alternative text of the image of the scoped skill.  */
        get: function () {
            return this.image.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SkillsController.prototype, "name", {
        /** @property {string} - The name of the scoped skill. */
        get: function () {
            return this.skill.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SkillsController.prototype, "count", {
        //#endregion
        //#region IController
        /** @inheritdoc */
        get: function () {
            return this.skill.count;
        },
        enumerable: false,
        configurable: true
    });
    /** @inheritdoc */
    SkillsController.prototype.scope = function (index) {
        this.skill.select(index);
        this.image.select(this.skill.image_id);
    };
    return SkillsController;
}());
exports.default = SkillsController;
