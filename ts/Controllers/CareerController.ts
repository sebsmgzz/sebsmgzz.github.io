import IController from '../Interfaces/IController';
import ExperienceModel from '../Models/ExperienceModel';
import OrganizationModel from '../Models/OrganizationModel';
import ImageModel from '../Models/ImageModel';

/** @class Controls the interactions between the career view and models. */
export default  class CareerController implements IController {

    //#region Fields

    /** @field {ExperienceModel} The experience model of the control. */
    private experience: ExperienceModel;

    /** @field {OrganizationModel} The organization model of the experience. */
    private organization: OrganizationModel;

    /** @field {ImageModel} The image model of the organization. */
    private image: ImageModel;

    //#endregion

    //#region Properties

    /** @property {string} - The path to the organization of the scoped experience. */
    public get organizationPath(): string {
        return this.organization.path;
    }

    /** @property {string} - The alternative text to the image of the scoped experience. */
    public get imageText(): string {
        return this.image.text;
    }

    /** @property {string} - The path to the image of the scoped experience. */
    public get imagePath(): string {
        return this.image.path;
    }

    /** @property {string} - The position of the scoped experience. */
    public get position(): string {
        return this.experience.position;
    }

    /** @property {string} - The organization name of the scoped experience. */
    public get organizationName(): string {
        return this.organization.name;
    }

    /** @property {Date} - The starting date of the experience of the scoped experience. */
    public get startingDate(): Date {
        return this.experience.startingDate;
    }

    /** @property {Date} - The ending date of the experience of the scoped experience. */
    public get endingDate(): Date {
        return this.experience.endingDate;
    }

    /** @property {string} - The description of the experience of the scoped experience. */
    public get description(): string {
        return this.experience.description;
    }

    //#endregion

    //#region Constructor

    public constructor() {
        this.experience = new ExperienceModel();
        this.organization = new OrganizationModel();
        this.image = new ImageModel();
    }

    //#endregion

    //#region IController

    /** @inheritdoc */
    public get count(): number {
        return this.experience.count;
    }

    /** @inheritdoc */
    public scope(index: number): void {
        this.experience.select(index);
        this.organization.select(this.experience.organization_id);
        this.image.select(this.organization.image_id)
    }

    //#endregion

}