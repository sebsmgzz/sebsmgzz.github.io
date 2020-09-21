"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CertificatesTable_1 = __importDefault(require("../Tables/CertificatesTable"));
/** @class Represents an educational certificate. */
var CertificateModel = /** @class */ (function () {
    function CertificateModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = CertificatesTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(CertificateModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateModel.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (v) {
            this._date = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateModel.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (v) {
            this._path = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateModel.prototype, "image_id", {
        get: function () {
            return this._image_id;
        },
        set: function (v) {
            this._image_id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateModel.prototype, "issuers_id", {
        get: function () {
            return this._issuers_id;
        },
        set: function (v) {
            this._issuers_id = v;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region IModel
    CertificateModel.prototype.parse = function (data) {
        this.name = data.name;
        this.date = data.date;
        this.image_id = data.image_id;
        this.path = data.path;
        this.issuers_id = data.issuers_id;
    };
    CertificateModel.prototype.select = function (index) {
        var data = CertificatesTable_1.default.Select(index);
        this.parse(data);
    };
    return CertificateModel;
}());
exports.default = CertificateModel;
