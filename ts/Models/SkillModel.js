"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SkillsTable_1 = __importDefault(require("../Tables/SkillsTable"));
/** @class Represents a skill. */
var SkillModel = /** @class */ (function () {
    function SkillModel() {
        //#region Properties
        //#endregion
        //#region IQueryable
        this.count = SkillsTable_1.default.Count();
        //#endregion
    }
    Object.defineProperty(SkillModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SkillModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SkillModel.prototype, "image_id", {
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
    SkillModel.prototype.parse = function (data) {
        this.name = data.name;
        this.description = data.description;
        this.image_id = data.image_id;
    };
    SkillModel.prototype.select = function (index) {
        var data = SkillsTable_1.default.Select(index);
        this.parse(data);
    };
    return SkillModel;
}());
exports.default = SkillModel;
