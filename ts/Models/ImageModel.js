"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ImagesTable_1 = __importDefault(require("../Tables/ImagesTable"));
/** @class Represents an image. */
var ImageModel = /** @class */ (function () {
    function ImageModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = ImagesTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(ImageModel.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (v) {
            this._path = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageModel.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (v) {
            this._text = v;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region IModel
    ImageModel.prototype.parse = function (data) {
        this.path = data.path;
        this.text = data.text;
    };
    ImageModel.prototype.select = function (index) {
        var data = ImagesTable_1.default.Select(index);
        this.parse(data);
    };
    return ImageModel;
}());
exports.default = ImageModel;
