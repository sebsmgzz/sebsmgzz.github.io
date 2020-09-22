
/** @class Controls the interactions between the career view and models. */
class CareerController {

    //#region Fields

    /** @field {ExperienceModel} The experience model of the control. */
    _experience = new ExperienceModel();

    /** @field {OrganizationModel} The organization model of the experience. */
    _organization = new OrganizationModel();

    /** @field {ImageModel} The image model of the organization. */
    _image = new ImageModel();

    //#endregion

    //#region Properties

    /** @property {string} - The path to the organization of the scoped experience. */
    get organizationPath() {
        return this._organization.path;
    }

    /** @property {string} - The alternative text to the image of the scoped experience. */
    get imageText() {
        return this._image.text;
    }

    /** @property {string} - The path to the image of the scoped experience. */
    get imagePath() {
        return this._image.path;
    }

    /** @property {string} - The position of the scoped experience. */
    get position() {
        return this._experience.position;
    }

    /** @property {string} - The organization name of the scoped experience. */
    get organizationName() {
        return this._organization.name;
    }

    /** @property {Date} - The starting date of the experience of the scoped experience. */
    get startingDate() {
        return this._experience.startingDate;
    }

    /** @property {Date} - The ending date of the experience of the scoped experience. */
    get endingDate() {
        return this._experience.endingDate;
    }

    /** @property {string} - The description of the experience of the scoped experience. */
    get description() {
        return this._experience.description;
    }

    /** @property {number} - THe number of experiences available for scoping. */
    get experiencesCount() {
        return this._experience.count;
    }
    //#endregion

    //#region Methods

    /** Selects an experience to focus on in.
     * @param index {number} The index of the experience to focus on.
     */
    scope(index) {
        this._experience.select(index);
        this._organization.select(this._experience.organization_id);
        this._image.select(this._organization.image_id)
    }

    //#endregion

}