import PersonalDataModel from '../Models/PersonalDataModel';
import ImageModel from '../Models/ImageModel';
import IController from '../Interfaces/IController';

export default  class ContactController implements IController {

    //#region Fields

    /** @field {PersonalDataModel} - The personal data model of the control. */
    private personalData: PersonalDataModel;

    /** @field {ImageModel} - The image model of the personal data. */
    private image: ImageModel;

    //#endregion 

    //#region Properties

    /** @field {string} - The personal data title of the scoped data. */
    public get title() : string {
        return this.personalData.title;
    }
    
    /** @field {string} - The personal data content of the scoped data.. */
    public get content() : string {
        return this.personalData.content;
    }

    /** @field {string} - The reference path of the scoped personal data. */
    public get reference() : string {
        return this.personalData.path;
    }

    /** @field {string} - The path to the image of the scoped data.. */
    public get imagePath() : string {
        return this.imagePath;
    }

    /** @field {string} - The alternative text of the image of the scoped data. */
    public get imageText() : string {
        return this.image.text;
    }

    //#endregion

    //#region Constructor

    public constructor() {
        this.personalData = new PersonalDataModel();
        this.image = new ImageModel();
    }

    //#endregion

    //#region IController

    /** @inheritdoc */
    public get count() : number {
        return this.personalData.count;
    }

    /** @inheritdoc */
    public scope(index: number): void {
        this.personalData.select(index);
        this.image.select(this.personalData.image_id);
    }

    //#endregion

}