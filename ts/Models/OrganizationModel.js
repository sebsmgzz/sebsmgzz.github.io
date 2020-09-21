"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OrganizationsTable_1 = __importDefault(require("../Tables/OrganizationsTable"));
/** @class Represents an organization. */
var OrganizationModel = /** @class */ (function () {
    function OrganizationModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = OrganizationsTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(OrganizationModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationModel.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (v) {
            this._path = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationModel.prototype, "image_id", {
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
    OrganizationModel.prototype.parse = function (data) {
        this.name = data.name;
        this.path = data.path;
        this.image_id = data.image_id;
    };
    OrganizationModel.prototype.select = function (index) {
        var data = OrganizationsTable_1.default.Select(index);
        this.parse(data);
    };
    return OrganizationModel;
}());
exports.default = OrganizationModel;
