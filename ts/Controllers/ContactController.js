"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalDataModel_1 = __importDefault(require("../Models/PersonalDataModel"));
var ImageModel_1 = __importDefault(require("../Models/ImageModel"));
var ContactController = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function ContactController() {
        this.personalData = new PersonalDataModel_1.default();
        this.image = new ImageModel_1.default();
    }
    Object.defineProperty(ContactController.prototype, "title", {
        //#endregion 
        //#region Properties
        /** @field {string} - The personal data title of the scoped data. */
        get: function () {
            return this.personalData.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactController.prototype, "content", {
        /** @field {string} - The personal data content of the scoped data.. */
        get: function () {
            return this.personalData.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactController.prototype, "reference", {
        /** @field {string} - The reference path of the scoped personal data. */
        get: function () {
            return this.personalData.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactController.prototype, "imagePath", {
        /** @field {string} - The path to the image of the scoped data.. */
        get: function () {
            return this.imagePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactController.prototype, "imageText", {
        /** @field {string} - The alternative text of the image of the scoped data. */
        get: function () {
            return this.image.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactController.prototype, "count", {
        //#endregion
        //#region IController
        /** @inheritdoc */
        get: function () {
            return this.personalData.count;
        },
        enumerable: false,
        configurable: true
    });
    /** @inheritdoc */
    ContactController.prototype.scope = function (index) {
        this.personalData.select(index);
        this.image.select(this.personalData.image_id);
    };
    return ContactController;
}());
exports.default = ContactController;
