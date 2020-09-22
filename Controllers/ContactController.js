
/** @class Controls interactions between the contact view and the respective models. */
class ContactController {

    //#region Fields

    /** @field {PersonalDataModel} - The personal data model of the control. */
    _personalData = new PersonalDataModel();

    /** @field {ImageModel} - The image model of the personal data. */
    _image = new ImageModel();

    //#endregion 

    //#region Properties

    /** @property {string} - The personal data title of the scoped data. */
    get title()  {
        return this._personalData.title;
    }
    
    /** @property {string} - The personal data content of the scoped data.. */
    get content()  {
        return this._personalData.content;
    }

    /** @property {string} - The reference path of the scoped personal data. */
    get reference()  {
        return this._personalData.path;
    }

    /** @property {string} - The path to the image of the scoped data.. */
    get imagePath()  {
        return this._image.path;
    }

    /** @property {string} - The alternative text of the image of the scoped data. */
    get imageText()  {
        return this._image.text;
    }

    /** @property {string} - The number of personal data available for scoping. */
    get dataCount() {
        return this._personalData.count;
    }

    //#endregion

    //#region Methods

    /** Selects a personal data to focus on in.
     * @param index {number} The index of the data to focus on.
     */
    scope(index) {
        this._personalData.select(index);
        this._image.select(this._personalData.image_id);
    }

    //#endregion

}