
/** @class Controls the interactions between the education view and models. */
class EducationController {

    //#region Fields  

    /** @field {CertificateModel} - The certificate model of the controller. */
    _certificate = new CertificateModel();

    /** @field {ImageModel} - The image model of the certificate. */
    _image = new ImageModel();

    /** @field {OrganizationModel[]} - The array of organization models of the certificate. */
    _organizations = [];
    
    //#endregion

    //#region Properties

    /** @property {number} - The number of issuers for the certificate. */
    get issuersCount() {
        return this._organizations.length;
    }

    /** @property {string} - The path to the image of the certificate. */
    get logoPath() {
        return this._image.path;
    }

    /** @property {string} - The alternative text of the image of the certificate. */
    get logoText() {
        return this._image.text;
    }

    /** @property {string} - The name of the credential of the certificate.*/
    get credentialName() {
        return this._certificate.name;
    }

    /** @property {string} - The path to the credential of the certificate. */
    get credentialPath() {
        return this._certificate.path;
    }
    
    /** @property {string} - The number of certificates available for scoping. */
    get certificatesCount() {
        return this._certificate.count;
    }

    /** @property {Date} - The date the credential was issued. */
    get credentialDate() {
        return this._certificate.date;
    }

    //#endregion

    //#region Methods

    /** Selects a certificate to focus on.
     * @param index {number} The index of the certificate.
     */
    scope(index) {
        this._certificate.select(index);
        this._image.select(this._certificate.image_id);
        this._organizations = [];
        for(let i = 0; i < this._certificate.issuers_id.length; i++) {
            let organization = new OrganizationModel();
            organization.select(this._certificate.issuers_id[i]);
            this._organizations.push(organization);
        }
    }

    /** Selects the reference of the issuer with the given index.
     * @param index {number} The index of the issuer to select
     */
    getIssuerReference(index) {
        return this._organizations[index].path;
    }

    /** Selects the name of the issuer with the given index.
     * @param index The index of the issuer to select.
     */
    getIssuerName(index) {
        return this._organizations[index].name;
    }

    //#endregion
    
}