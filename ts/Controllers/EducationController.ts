import IController from '../Interfaces/IController';
import CertificateModel from '../Models/CertificateModel';
import OrganizationModel from '../Models/OrganizationModel';
import ImageModel from '../Models/ImageModel';

export default  class EducationController implements IController {

    //#region Fields

    /** @field {CertificateModel} - The certificate model of the controller. */
    private certificate: CertificateModel;

    /** @field {ImageModel} - The image model of the certificate. */
    private image: ImageModel;

    /** @field {Array<OrganizationModel>} - The array of organization models of the certificate. */
    private organizations: Array<OrganizationModel>;
    
    //#endregion

    //#region Properties

    /** @property {number} - The number of issuers for the scoped certificate. */
    public get issuersCount(): number {
        return this.organizations.length;
    }

    /** @property {string} - The path to the image of the scoped certificate. */
    public get logoPath(): string {
        return this.image.path;
    }

    /** @property {string} - The alternative text of the image of the scoped certificate. */
    public get logoText(): string {
        return this.image.text;
    }

    /** @property {string} - The name of the credential of the scoped certificate.*/
    public get credentialName(): string {
        return this.certificate.name;
    }

    /** @property {string} - The path to the credential of the scoped certificate. */
    public get credentialPath(): string {
        return this.certificate.path;
    }

    //#endregion

    //#region Constructor

    public constructor() {
        this.certificate = new CertificateModel();
        this.image = new ImageModel();
        this.organizations = new Array<OrganizationModel>(this.certificate.issuers_id.length);
    }

    //#endregion

    //#region Methods

    /**
     * Selects the reference of the issuer with the given index.
     * @param index {number} The index of the issuer to select
     */
    public getIssuerReference(index: number): string {
        return this.organizations[index].path;
    }

    /**
     * Selects the name of the issuer with the given index.
     * @param index The index of the issuer to select.
     */
    public getIssuerName(index: number): string {
        return this.organizations[index].name;
    }

    //#endregion

    //#region IController

    /** @inheritdoc */
    public get count(): number {
        return this.certificate.count;
    }

    /** @inheritdoc */
    public scope(index: number): void {
        this.certificate.select(index);
        this.image.select(this.certificate.image_id);
        this.organizations = new Array<OrganizationModel>(this.certificate.issuers_id.length);
        for(let i: number = 0; i < this.certificate.issuers_id.length; i++) {
            let organization = new OrganizationModel();
            organization.select(this.certificate.issuers_id[i]);
            this.organizations.push(organization);
        }
    }

    //#endregion
    
}