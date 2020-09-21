"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExperiencesTable_1 = __importDefault(require("../Tables/ExperiencesTable"));
/** @class Represents a career experience. */
var ExperienceModel = /** @class */ (function () {
    function ExperienceModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = ExperiencesTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(ExperienceModel.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (v) {
            this._position = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExperienceModel.prototype, "startingDate", {
        get: function () {
            return this._startingDate;
        },
        set: function (v) {
            this._startingDate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExperienceModel.prototype, "endingDate", {
        get: function () {
            return this._endingDate;
        },
        set: function (v) {
            this._endingDate = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExperienceModel.prototype, "organization_id", {
        get: function () {
            return this._organization_id;
        },
        set: function (v) {
            this._organization_id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExperienceModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region IModel
    ExperienceModel.prototype.parse = function (data) {
        this.position = data.position;
        this.startingDate = data.startingDate;
        this.endingDate = data.endingDate;
        this.organization_id = data.organization_id;
        this.description = data.description;
    };
    ExperienceModel.prototype.select = function (index) {
        var data = ExperiencesTable_1.default.Select(index);
        this.parse(data);
    };
    return ExperienceModel;
}());
exports.default = ExperienceModel;
