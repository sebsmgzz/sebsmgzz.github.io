"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CertificateModel_1 = __importDefault(require("../Models/CertificateModel"));
var OrganizationModel_1 = __importDefault(require("../Models/OrganizationModel"));
var ImageModel_1 = __importDefault(require("../Models/ImageModel"));
var EducationController = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function EducationController() {
        this.certificate = new CertificateModel_1.default();
        this.image = new ImageModel_1.default();
        this.organizations = new Array(this.certificate.issuers_id.length);
    }
    Object.defineProperty(EducationController.prototype, "issuersCount", {
        //#endregion
        //#region Properties
        /** @property {number} - The number of issuers for the scoped certificate. */
        get: function () {
            return this.organizations.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationController.prototype, "logoPath", {
        /** @property {string} - The path to the image of the scoped certificate. */
        get: function () {
            return this.image.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationController.prototype, "logoText", {
        /** @property {string} - The alternative text of the image of the scoped certificate. */
        get: function () {
            return this.image.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationController.prototype, "credentialName", {
        /** @property {string} - The name of the credential of the scoped certificate.*/
        get: function () {
            return this.certificate.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducationController.prototype, "credentialPath", {
        /** @property {string} - The path to the credential of the scoped certificate. */
        get: function () {
            return this.certificate.path;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region Methods
    /**
     * Selects the reference of the issuer with the given index.
     * @param index {number} The index of the issuer to select
     */
    EducationController.prototype.getIssuerReference = function (index) {
        return this.organizations[index].path;
    };
    /**
     * Selects the name of the issuer with the given index.
     * @param index The index of the issuer to select.
     */
    EducationController.prototype.getIssuerName = function (index) {
        return this.organizations[index].name;
    };
    Object.defineProperty(EducationController.prototype, "count", {
        //#endregion
        //#region IController
        /** @inheritdoc */
        get: function () {
            return this.certificate.count;
        },
        enumerable: false,
        configurable: true
    });
    /** @inheritdoc */
    EducationController.prototype.scope = function (index) {
        this.certificate.select(index);
        this.image.select(this.certificate.image_id);
        this.organizations = new Array(this.certificate.issuers_id.length);
        for (var i = 0; i < this.certificate.issuers_id.length; i++) {
            var organization = new OrganizationModel_1.default();
            organization.select(this.certificate.issuers_id[i]);
            this.organizations.push(organization);
        }
    };
    return EducationController;
}());
exports.default = EducationController;
