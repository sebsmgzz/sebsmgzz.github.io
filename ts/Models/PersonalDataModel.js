"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalDataTable_1 = __importDefault(require("../Tables/PersonalDataTable"));
/** @class Represents a personal data. */
var PersonalDataModel = /** @class */ (function () {
    function PersonalDataModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = PersonalDataTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(PersonalDataModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (v) {
            this._title = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonalDataModel.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (v) {
            this._content = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonalDataModel.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (v) {
            this._path = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonalDataModel.prototype, "image_id", {
        get: function () {
            return this._image_id;
        },
        set: function (v) {
            this._image_id = v;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region IModel
    PersonalDataModel.prototype.parse = function (data) {
        this.title = data.title;
        this.content = data.content;
        this.path = data.path;
        this.image_id = data.image_id;
    };
    PersonalDataModel.prototype.select = function (index) {
        return PersonalDataTable_1.default.Select(index);
    };
    return PersonalDataModel;
}());
exports.default = PersonalDataModel;
