"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExperienceModel_1 = __importDefault(require("../Models/ExperienceModel"));
var OrganizationModel_1 = __importDefault(require("../Models/OrganizationModel"));
var ImageModel_1 = __importDefault(require("../Models/ImageModel"));
/** @class Controls the interactions between the career view and models. */
var CareerController = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function CareerController() {
        this.experience = new ExperienceModel_1.default();
        this.organization = new OrganizationModel_1.default();
        this.image = new ImageModel_1.default();
    }
    Object.defineProperty(CareerController.prototype, "organizationPath", {
        //#endregion
        //#region Properties
        /** @property {string} - The path to the organization of the scoped experience. */
        get: function () {
            return this.organization.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "imageText", {
        /** @property {string} - The alternative text to the image of the scoped experience. */
        get: function () {
            return this.image.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "imagePath", {
        /** @property {string} - The path to the image of the scoped experience. */
        get: function () {
            return this.image.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "position", {
        /** @property {string} - The position of the scoped experience. */
        get: function () {
            return this.experience.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "organizationName", {
        /** @property {string} - The organization name of the scoped experience. */
        get: function () {
            return this.organization.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "startingDate", {
        /** @property {Date} - The starting date of the experience of the scoped experience. */
        get: function () {
            return this.experience.startingDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "endingDate", {
        /** @property {Date} - The ending date of the experience of the scoped experience. */
        get: function () {
            return this.experience.endingDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "description", {
        /** @property {string} - The description of the experience of the scoped experience. */
        get: function () {
            return this.experience.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerController.prototype, "count", {
        //#endregion
        //#region IController
        /** @inheritdoc */
        get: function () {
            return this.experience.count;
        },
        enumerable: false,
        configurable: true
    });
    /** @inheritdoc */
    CareerController.prototype.scope = function (index) {
        this.experience.select(index);
        this.organization.select(this.experience.organization_id);
        this.image.select(this.organization.image_id);
    };
    return CareerController;
}());
exports.default = CareerController;
